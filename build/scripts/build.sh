r.js -o build.js
cd ../public/assets/js

printf "Removing collections folder \n"
rm -rf collections

printf "Removing composite folder \n"
rm -rf composites

printf "Removing config folder \n"
rm -rf configs

printf "Removing templates folder \n"
rm -rf templates

printf "Removing models folder \n"
rm -rf models

printf "Removing lists folder \n"
rm -rf lists

printf "Removing views folder \n"
rm -rf views

printf "Removing wrapper folder \n"
rm -rf wrapper

printf "Removing debugger and Router \n"
rm -rf debugger.js
rm -rf Router.js

printf "Removing JS lib files \n"
# rm -rf lib
#remove the require.js file from the lib folder then put it back in once everything is deleted
mv lib/require.js require.js && rm -rf lib/* && mv require.js lib/require.js

# printf "Removing build files \n"
# rm -rf build.*
#save a unique version in the logs
printf "Moving build result file \n"
mv -f build.txt ../../../scripts/logs/build.$(date "+%Y-%m-%d_%H.%M.%S").txt

printf "All done! \n"

