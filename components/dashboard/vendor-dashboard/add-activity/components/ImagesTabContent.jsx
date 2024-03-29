
'use client'
import React, { useState, useEffect } from "react";
import DropdownList from '../components/ActivityTypes';
import {useActivitiesData} from "../../../../../data/activities-data";
import LoadingSpinner from '@/components/spinners/LoadingSpinner';
import { slide_width, slide_height, gallery_width, gallery_height } from '@/components/common/imageConstants';




const ImagesTabContent = (imageType) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(false);

     // Get data for dropdown
     const activities = useActivitiesData();
 

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newImages = [];
    const maxSize = 1800; // in pixels

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width > maxSize || img.height > maxSize) {
            setError(
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
            );
          } else if (
            !["image/png", "image/jpeg", "image/webp"].includes(file.type.toLowerCase())
          ) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
            );
          } else {
            newImages.push(reader.result);
            if (newImages.length === fileList.length) {
              setImages([...images, ...newImages]);
              setError("");
            }
          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
    setFiles(fileList);
  };
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  const handleUpload = () => {
    const formData = new FormData();
    setLoading(true);
    console.log("loading before", loading);
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    console.log('imageType:', imageType);

    fetch(baseURL + '/uploadImage?image='+imageType.imageType+'&category='+imageType.category+'&id='+selectedOption+'&slide_width='+slide_width+'&slide_height='+slide_height+'&gallery_width='+gallery_width+'&gallery_height='+gallery_height, {
      method: 'POST',
      credentials: 'include',
      body: formData

    })
      .then(response => response.json())
      .catch(error => console.error('Error uploading images:', error));

      setTimeout(() => {
        setLoading(false);
        console.log("loading after", loading);
        document.getElementById("SubmitForm").reset();
      }
        , 1000);
 

  };

   const handleSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option", selectedOption)
  };

  return (
    <>
   <form id="SubmitForm" onSubmit={handleUpload}>
   {loading ? (<LoadingSpinner />) : (
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Banner Images</div>
        <div className="mt-30">
          {/* Start of Upload Images */}
          <div className="col-12">
        <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width:'400px', height:'50px'}}>
          <DropdownList className="lh-1 text-16 text-light-1" options={activities} onSelect={handleSelect} >
            </DropdownList>
          </div>
          <br></br>
        </div>
          <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="bannerUpload" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Images</div>
            </div>
          </label>
          <input
            type="file"
            id="bannerUpload"
            multiple
            accept="image/png, image/jpeg, image/webp"
            className="d-none"
            onChange={handleFileChange}
          />
          <div className="text-start mt-10 text-14 text-light-1">
            PNG or JPG no bigger than 800px wide and tall.<br></br>
            384 x 384 pixels is the recommended size.
          </div>
        </div>
      </div>
      {/* End uploader field */}

      {images.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt="image" className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={() => handleRemoveImage(index)}
            >
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {error && <div className="col-12 mb-10  text-red-1">{error}</div>}
    </div>
          {/* End Upload Images of Upload Images */}
        </div>
        {/* End BannerUploader */}
        <div className="d-inline-block pt-30">
          <button onClick={handleUpload}
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
        )}

    </form>
    </>
  );
};

export default ImagesTabContent;
