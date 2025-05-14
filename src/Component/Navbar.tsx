function Navbar() {
  return (
    <>
      <div>
        <nav className="flex bg-gray-50  justify-end gap-25 text-center h-20 pt-2 pr-4 text-2xl ">
          <img className="  pr-40" src="./Images/logo-black.svg" />
          <button>Home</button>
          <button>About</button>
          <button>Programs</button>
          <button>Oppertunity</button>
          <button>Gallery</button>
          <button>Contact</button>
        </nav>

        <div className="fixed ">
          <img
            src="./Images/hero.jpg"
            className="w-full h-auto brightness-50"
          />

          <div className="absolute top-1/4 left-100 text-white max-w-xl align-center text-center  ">
            <div className="font-mono text-white text-4xl">
              Committed to Excellence in Piano Studies Since 1967
            </div>
            <div className="text-2xl align-center mt-4 ">
              We provide the best possible education and practical training for
              the qualified piano student who wishes to pursue a career in
              music, as well as for music-loving students whose aims are
              non-professional.
            </div>

            <button className="text-gray-900  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
