find ./ -iname '*.html' -exec diff -u {} ~/public_html/{} \;
find ./ -iname '*.py' -exec diff -u {} ~/public_html/{} \;
