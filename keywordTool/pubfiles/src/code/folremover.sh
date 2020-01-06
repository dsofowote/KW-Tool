for ((i=1; i<=$#; i++)); do
echo /**Folder Deletion Begins**/
echo "Section $i --> ${!i}"
dirs=$(find -type d -name "${!i}")
echo $dirs
dirsLength=${#dirs}
dPath=${dirs:2:$dirsLength}
echo $dPath
rm -rfv  $dPath
echo /**Folder Deletion Ends**/
echo ""
done