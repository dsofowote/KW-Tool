################################################################################
##
## ISFE Publisher Script Build System
##
## Author: CC
## Copyright (c) InSkin Media Ltd, http://www.inskinmedia.com
################################################################################

# list of input files used to build a Publisher Script:
INPUT_FILES = src/libs/intro.js \
							src/libs/intro-pubfile.js \
							src/libs/util.js \
							src/libs/BaseClass.class.js \
							src/libs/EventDispatcher.class.js \
							src/libs/Integration.class.js \
							src/libs/Telemetry.class.js \
							src/libs/prolog.js $1 $2 src/libs/epilog.js \
							src/libs/outro.js

# get all source files (<publisher>/<section>/*.[js|css]):
SOURCES := $(subst src/code/,,$(foreach e,js css,$(wildcard src/code/*/*/*.$e)))
SOURCES := $(filter-out %.inc.js,$(SOURCES))
#$(info SOURCES = $(SOURCES))
#$(info ---)

# extract section directories (<publisher>/<section>) from SOURCES:
SECTIONS := $(patsubst %/,%,$(sort $(dir $(SOURCES))))
#$(info SECTIONS = $(SECTIONS))
#$(info ---)

# extract publisher directories from SECTIONS:
PUBLISHERS := $(patsubst %/,%,$(sort $(dir $(SECTIONS))))
#$(info PUBLISHERS = $(PUBLISHERS))
#$(info ---)

# get the goals specified on command line:
GOALS := $(MAKECMDGOALS)

# when no goals specified on command line, assume "all", otherwise clean them
# of known suffixes:
ifeq ($(strip $(GOALS)),)
GOALS := all
else
GOALS := $(GOALS:-min=)
GOALS := $(GOALS:-backup=)
GOALS := $(GOALS:-deploy=)
GOALS := $(GOALS:-revert=)
GOALS := $(GOALS:-cdndiff=)
GOALS := $(GOALS:-cdnsync=)
GOALS := $(GOALS:-cdncheck=)
endif

#$(info GOALS = $(GOALS))
#$(info ---)

##
# Macros
#

# create all targets for a publisher:
# $1 - <publisher>
define publisher-rule
$(info - Publisher "$1")
$1: $(notdir $(filter $1/%,$(SECTIONS)))
$1-min: $(addsuffix -min,$(notdir $(filter $1/%,$(SECTIONS))))
$1-backup: $(addsuffix -backup,$(notdir $(filter $1/%,$(SECTIONS))))
$1-deploy: $(addsuffix -deploy,$(notdir $(filter $1/%,$(SECTIONS))))
$1-revert: $(addsuffix -revert,$(notdir $(filter $1/%,$(SECTIONS))))
$1-cdndiff: $(addsuffix -cdndiff,$(notdir $(filter $1/%,$(SECTIONS))))
$1-cdnsync: $(addsuffix -cdnsync,$(notdir $(filter $1/%,$(SECTIONS))))
$1-cdncheck: $(addsuffix -cdncheck,$(notdir $(filter $1/%,$(SECTIONS))))
endef

# create all targets for a section:
# $1 - <section>
define section-rule
$(info - Section "$1")
$1: $(call section-artifacts,$1,out/raw) $(call section-artifacts,$1,out/raw/gzip)
$1-min: $(call section-artifacts,$1,out/min) $(call section-artifacts,$1,out/min/gzip)
$1-backup:
	@@echo "Making local backup for section ID [$$(subst -backup,,$$@)]..."
$1-deploy: $(call section-artifacts,$1,dpl) $(call section-artifacts,$1,dpl/gzip)
$1-revert: $(call section-artifacts,$1,rvt)
$1-cdncheck: clean-cdncheck $(call section-artifacts,$1,tmp/cdncheck)
endef

# recipe for a JavaScript source file:
# $1 - <section>/*.js
define js-rule
$(info - JS file "$1")
out/raw/$1: $(if $(call onesrc,$1),$(call js-prerequisites,$1))
	@@echo "Making JS file [$$@]..."
	@@mkdir -p $$(dir $$@)
	@@cat $$(filter %.js,$$^) > $$@
	@@sed -i 's/{{SCRIPT_ID}}/$(call script-id,$(call ppath,$1))/' $$@
	@@sed -i 's/{{BUILD_DATETIME}}/$(call datetime)/' $$@
endef

# recipe for a CSS source file:
# $1 - <section>/*.css
define css-rule
$(info - CSS file "$1")
out/raw/$1: $(if $(call onesrc,$1),$(call css-prerequisites,$1))
	@@echo "Making CSS file [$$@]..."
	@@mkdir -p $$(dir $$@)
	@@cat $$^ > $$@
endef

# create a list of all prerequisites for a JavaScript source file:
# $1 - <section>/*.js
define js-prerequisites
$(call INPUT_FILES,$(call dependencies,$(call fbase,$1).dep),$(call fpath,$1))
endef

# create a list of all prerequisites for a CSS source file:
# $1 - <section>/*.css
define css-prerequisites
$(call fpath,$1)
endef

# get all dependencies from a .dep file, if it exists:
# $1 - src/code/<publisher>/<section>/*.dep
define dependencies
$(if $(wildcard $1),$(call read-dep,$1) $1)
endef

# read a .dep file:
# $1 - src/code/<publisher>/<section>/*.dep
define read-dep
$(shell grep -sv '^\s*\#' $1 | sed 's/^\s*/$(subst /,\/,$(dir $1))/')
endef

# determine the script ID for a JavaScript source file:
# $1 - <publisher>/<section>/*.js
define script-id
$(subst /,\/,$(basename $(subst $(firstword $(subst /, ,$1))/,,$1)))
endef

# generate paths for all section artifacts based on a base path:
# $1 - <section>
# $2 - base path
define section-artifacts
$(addprefix $2/,$(call shiftdir,$(subst src/code/,,$(call section-sources,$1))))
endef

# get all source files for a section:
# $1 - <section>
define section-sources
$(filter-out %.inc.js,$(foreach e,js css,$(wildcard src/code/*/$1/*.$e)))
endef

# remove the first directory in a path (a/b/c -> b/c):
# $1 - list of paths
define shiftdir
$(foreach p,$1,$(subst $(firstword $(subst /, ,$p))/,,$p))
endef

# make sure an artifact has just one potential source (i.e.: we don't have the
# same Publisher Script file [sectionID/filename] in two different publisher
# directories), otherwise trigger an error:
# $1 - <section>/*
define onesrc
$(if $(word 2,$(wildcard src/code/*/$1)),$(call error-multiple-source,$1),ok)
endef

# error when an artifact has multiple sources:
# $1 - artifact path (<section>/*)
define error-multiple-source
$(info )
$(error ERROR - Multiple sources for $1: $(wildcard src/code/*/$1))
endef

# map from [<section>/*] to [src/code/<publisher>/<section>/*]:
# $1 - <section>/*
define fpath
$(wildcard src/code/*/$1)
endef

# map from [<section>/*] to [<publisher>/<section>/*]:
# $1 - <section>/*
define ppath
$(subst src/code/,,$(call fpath,$1))
endef

# map from [<section>/*.ext] to [src/code/<publisher>/<section>/*]:
# $1 - <section>/*
define fbase
$(basename $(wildcard src/code/*/$1))
endef

# get the current date and time (YYYYMMDDHHMMSS):
define datetime
$(shell date +"%Y%m%d%H%M%S")
endef

##
# Static Rules
#

# define phony targets:
.PHONY: all all-min all-backup all-deploy all-revert clean help

# default target:
all: $(PUBLISHERS) oms-index

# targets affecting all files:
all-min: $(addsuffix -min,$(PUBLISHERS)) oms-index-min
all-backup: $(addsuffix -backup,$(PUBLISHERS))
all-deploy: $(addsuffix -deploy,$(PUBLISHERS)) oms-index-deploy
all-revert: $(addsuffix -revert,$(PUBLISHERS))
all-cdncheck: $(addsuffix -cdncheck,$(PUBLISHERS))

# OMS Index:
OMSINDEX_FILES = src/libs/intro.js \
								 src/libs/intro-omsindex.js \
								 $1 \
								 src/libs/outro.js
OMSINDEX_SOURCES := $(subst src/oms-index/,,$(wildcard src/oms-index/*.js))
oms-index: $(addprefix out/raw/oms-index/,$(OMSINDEX_SOURCES)) $(addprefix out/raw/gzip/oms-index/,$(OMSINDEX_SOURCES))
oms-index-min: $(addprefix out/min/oms-index/,$(OMSINDEX_SOURCES)) $(addprefix out/min/gzip/oms-index/,$(OMSINDEX_SOURCES))
oms-index-deploy: $(addprefix dpl/oms-index/,$(OMSINDEX_SOURCES)) $(addprefix dpl/gzip/oms-index/,$(OMSINDEX_SOURCES))

# OMS index implicit rules:
out/raw/oms-index/%: $(call OMSINDEX_FILES,src/oms-index/%)
	@@echo "Making JS file [$@]..."
	@@mkdir -p $(dir $@)
	@@cat $^ > $@

# clean:
clean:
	@@rm -rf out dpl/*

# print usage:
help:
	@@echo "Usage: make [<target>]"
	@@echo "In case no target is specified, \"all\" is assumed."
	@@echo ""
	@@echo "Valid targets are:"
	@@echo ""
	@@echo "  all               - make all files"
	@@echo "  <publisher>       - make all files of specified publisher"
	@@echo "  <section>         - make all files of specified section"
	@@echo ""
	@@echo "Valid suffixes are:"
	@@echo ""
	@@echo "  <target>-min      - make minified files"
	@@echo "  <target>-cdncheck - check if CDN files are the same as local files"
	@@echo ""

##
# Generate Dynamic Rules
#

# when "all" is present among goals we generate rules for everything:
ifneq ($(filter all,$(GOALS)),)
# all publishers:
P_GOALS := $(PUBLISHERS)
# all sections:
S_GOALS := $(SECTIONS)
# all JS files:
JS_GOALS := $(filter %.js,$(SOURCES))
# all CSS files:
CSS_GOALS := $(filter %.css,$(SOURCES))
else
# extract publishers:
P_GOALS := $(filter $(GOALS),$(PUBLISHERS))
# extract sections:
S_GOALS := $(filter $(foreach g,$(GOALS),$g/% %/$g),$(SECTIONS))
# extract sources:
SOURCE_GOALS := $(filter $(foreach s,$(S_GOALS),$s/%),$(SOURCES))
# extract JS files:
JS_GOALS := $(filter %.js,$(SOURCE_GOALS))
# extract CSS files:
CSS_GOALS := $(filter %.css,$(SOURCE_GOALS))
endif

#$(info PUBLISHER GOALS = $(P_GOALS))
#$(info ---)
#$(info SECTION GOALS = $(S_GOALS))
#$(info ---)
#$(info JS GOALS = $(JS_GOALS))
#$(info ---)
#$(info CSS GOALS = $(CSS_GOALS))
#$(info ---)

# generate rules if we have any publisher or section goals:
GOALS := $(P_GOALS) $(S_GOALS)
ifneq ($(strip $(GOALS)),)
$(info Generating dynamic rules for:)

# publisher targets:
$(foreach p,$(P_GOALS),$(eval $(call publisher-rule,$p)))

# section targets:
S_GOALS := $(sort $(call shiftdir,$(S_GOALS)))
$(foreach s,$(S_GOALS),$(eval $(call section-rule,$s)))

# JS targets:
$(foreach f,$(JS_GOALS),$(eval $(call js-rule,$(call shiftdir,$f))))

# CSS targets:
$(foreach f,$(CSS_GOALS),$(eval $(call css-rule,$(call shiftdir,$f))))

$(info Done!)
endif

##
# Implicit Rules
#

# gzip files:
out/raw/gzip/%: out/raw/%
	@@echo "Gzipping [$@]..."
	@@mkdir -p out/raw/gzip/$(dir $*)
	@@gzip -c $< > $@

out/min/gzip/%: out/min/%
	@@echo "Gzipping [$@]..."
	@@mkdir -p out/min/gzip/$(dir $*)
	@@gzip -c $< > $@

# JS minify:
out/min/%.js: out/raw/%.js
	@@echo "Minifying [$^ -> $@]..."
	@@mkdir -p $(dir $@)
	@@bin/minify_js $^ > $@

# CSS minify:
out/min/%.css: out/raw/%.css
	@@echo "Minifying [$^ -> $@]..."
	@@mkdir -p $(dir $@)
	@@bin/minify_css $^ > $@

# select a file for deployment:
dpl/%: out/min/%
	@@echo "Selecting file for deployment to CDN [$*]..."
	@@mkdir -p dpl/$(dir $*)
	@@cp $^ $@

tmp/cdncheck/%: out/min/%
	@@echo -n "Checking file on CDN [$(subst out/min/,,$<)]... "
	@@mkdir -p tmp
	@@bin/cdncheck $(subst out/min/,,$<)

# clean previous CDN check report:
clean-cdncheck:
	@@echo "Cleaning previous CDN check reports, if any..."
	@@rm -f tmp/cdncheck-*.txt
