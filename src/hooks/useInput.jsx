import React from "react";

const useInput = (defaulValue) => {
    const [value, setValue] = React.useState(defaulValue);
    const handleValueChange = (e) => setValue(e.target.value);
    return [value, handleValueChange]
}

export default useInput;