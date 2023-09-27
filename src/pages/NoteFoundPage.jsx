import React from "react";
import LocaleContext from "../contexts/LocaleContext";


function NotFoundPage(){
  const { locale } = React.useContext(LocaleContext)
  return(
<div className="page-note-found">
      <h1>
        {
          locale === 'id'
          ? '404 - Halaman Tidak Ditemukan'
          : '404 - Uknown Page'
        }
      </h1>
      <img src="./no-results.png" />
    </div>
  )
}


export default NotFoundPage;






