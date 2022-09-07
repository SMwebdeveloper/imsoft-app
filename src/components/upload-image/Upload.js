import React from 'react';
import ImageUploading from 'react-images-uploading';
import upload from '../../assets/upload.svg'

export function Upload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="w-[100%]">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
        //   onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="flex justify-between items-center">
            <button
              className='py-5 px-7 rounded-lg border-[#939EB4] border-[1px] border-solid mr-6'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
                      >
              <img src={upload} alt={upload} className="mx-auto"/>          
              <h3 className="text-sm font-medium text-[ #2C3E50]">Pasport rasmi</h3>
              <p className="text-xs text-[#939EB4]">Yuklab olish uchun bosing</p>
            </button>
            <button
            className='p-5 rounded-lg border-[#939EB4] border-[1px] border-solid'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img src={upload} alt={upload} className="mx-auto"/>          
              <h3 className="text-sm font-medium text-[ #2C3E50]">Pasport ro'yxatga olish</h3>
              <p className="text-xs text-[#939EB4]">Yuklab olish uchun bosing</p>
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Upload