import { ClipLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader color="rgb(57, 86, 255)" loading={isLoading} size={50} />
    </div>
  );
};
export default Loader;
