import ModelInfo from "./components/ModelInfo";
import UploadBox from "./components/UploadBox";

export default function UploadPage() {
  return (
    <div className="px-4 md:px-10 py-5 bg-white">
      <ModelInfo />
      <UploadBox />
    </div>
  );
}
