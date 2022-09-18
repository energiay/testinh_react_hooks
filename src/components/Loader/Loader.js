import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'


const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
};

const Loader = () => {
    return <ClipLoader loading={true} cssOverride={override} size={150} />
}

export default Loader
