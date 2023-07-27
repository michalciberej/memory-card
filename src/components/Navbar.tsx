import { mdiInformationVariantCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  const handleHover = (): void => {
    if (hidden === false) setHidden(true);
    else setHidden(false);
  };

  return (
    <nav className="flex justify-between items-center bg-red-900 shadow-lg px-8 py-2">
      <h1 className="text-3xl text-white">Logo</h1>
      <div onClick={handleHover}>
        <Icon
          path={mdiInformationVariantCircleOutline}
          size={1.5}
          className="text-white hover:animate-pulse"
        />
      </div>
      {hidden && <Info />}
    </nav>
  );
}

function Info() {
  return (
    <>
      <div
        id="info"
        className="flex flex-wrap p-4 absolute z-10 top-8 right-4 bg-white rounded-xl text-gray-700 max-w-xs shadow-md"
      >
        <span className="mb-1 text-xl">Game rules:</span>
        <span>
          Obtain points by selecting cards you haven't selected before.
        </span>
      </div>
    </>
  );
}

export default Navbar;
