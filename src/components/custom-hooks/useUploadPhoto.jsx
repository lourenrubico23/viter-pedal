import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../../store/StoreAction";

const useUploadPhoto = (url, dispatch) => {
  const [photo, setPhoto] = React.useState(null);

  const uploadPhoto = async () => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      // consoleLog(data);
    }
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.files[0]);

    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      // dispatch(setErrorMessage(""));
      return;
    }

    const img = e.target.files[0];
    // console.log(img);

    // console.log("img.size", img.size);
    if (img.size > 150000) {
      dispatch(setError(true));
      dispatch(setMessage("Photo is too big. It should be less than 10Kb."));
    } else {
      dispatch(setError(false));
      // consoleLog("Set photo");
      setPhoto(img);
    }
  };

  return { uploadPhoto, handleChangePhoto, photo };
};

export default useUploadPhoto;
