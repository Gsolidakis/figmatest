#!/bin/bash

PAGES=(
  "HomePage:Home"
  "HikePage:The-Hike"
  "GetTherePage:How-to-get-there"
  "FAQPage:FAQ"
  "GalleryPage:Gallery"
  "LiveCameraPage:Live-camera"
  "LiveCameraOmalosPage:Live-Camera-Omalos"
  "LiveCameraSamariaPage:Live-Camera-Samaria"
  "BookVillaPage:BookVilla"
  "TravelAgenciesPage:Travel-Agencies-Chania"
  "DisclaimerPage:Disclaimer"
)

for page in "${PAGES[@]}"; do
  OLD_NAME=$(echo $page | cut -d: -f1)
  NEW_NAME=$(echo $page | cut -d: -f2)
  
  if [ -f "/app/frontend/src/pages/${OLD_NAME}.jsx" ]; then
    cp "/app/frontend/src/pages/${OLD_NAME}.jsx" "/app/nextjs-site/pages/${NEW_NAME}.js"
    
    # Convert React Router imports to Next.js
    sed -i "s/from 'react-router-dom'/from 'next\/link'/g" "/app/nextjs-site/pages/${NEW_NAME}.js"
    sed -i 's/import { Link }/import Link/g' "/app/nextjs-site/pages/${NEW_NAME}.js"
    sed -i 's/import { Link, /import Link from "next\/link";\nimport { /g' "/app/nextjs-site/pages/${NEW_NAME}.js"
    
    # Convert Link props
    sed -i 's|to="|href="|g' "/app/nextjs-site/pages/${NEW_NAME}.js"
    
    # Convert file extensions in imports
    sed -i 's|\.jsx|.js|g' "/app/nextjs-site/pages/${NEW_NAME}.js"
    
    echo "✅ Converted ${OLD_NAME} -> ${NEW_NAME}.js"
  fi
done

echo "✅ All pages converted!"
