for ((i=1; i<=$#; i++)); do
echo /**Move Begins**/
echo "Section $i --> ${!i}"
dirs=$(find -type d -name "${!i}")
echo $dirs
dirsLength=${#dirs}
dPath=${dirs:2:$dirsLength}
((noSection=$dirsLength - 8))
pPath=${dirs:2:$noSection}
echo $dPath
echo $pPath
mkdir ~/public_html/grave/pubfiles_graveyard/src/code/$pPath
mv -f  $dPath ~/public_html/grave/pubfiles_graveyard/src/code/$dPath
echo /**Move Ends**/
echo ""
done

#FIND ISSUES
# for ((i=1; i<=$#; i++)); do
# echo "Section $i --> ${!i}"
# dirs=$(find -type d -name "${!i}")
# echo $dirs
# done