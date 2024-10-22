/* eslint-disable no-unused-vars */
const getData = () => {
  const LsData = localStorage.getItem("chefsData");
  if (LsData) {
    return JSON.parse(LsData);
  }
  return [];
};
const savedData = (id)=>{
   localStorage.setItem('chefsData',JSON.stringify(id))
}
const addData =(id)=>{
    const getFromLs = getData()
    const addToLs = [...getFromLs,id]
    savedData(addToLs)
}
const removedData = (id)=>{
    const LsData = getData()
    const remainingData = LsData.filter(data=>data!==id)
    savedData(remainingData)
}
const removedAllData=()=>{
    localStorage.removeItem('chefsData')
}
export {addData,removedData,getData}