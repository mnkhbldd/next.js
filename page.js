import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[313px] h-[500px] bg-white rounded-[18px] flex flex-col items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/2609/ceeb/74c88a8937d995e24c37c91f4084949c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SIsyhvpXHmkEVQqCPa26sz~xpVpEVdUe43TZ3H2gtveWTQIb4zAJN1hBMBQxIdbBhZr20ZFNx95X3CfqsnriQBgaaOp9YjxEFKNumktBMOPgsawiuVBDXDe5RA46wil1qcAvWyeRYXThKzMuB-bgElRDWKZVuNIzmdOtrcaRHnOVrWnyc6qx77sGXV0pCRXR7Of4~vVO96vwDg49x2wHQz6Ut-NCaw8gw2E2oLG9MGzOZiBw0ANR79WaSQxBwX8K89kDxYjFZOvjlQcjcfAwuvCscZQoywDU2ssiQn0gMsZJRXA-zKKs405CF8YFk0LQYBfQO5FIv5razgprnufh9Q__"
        className="px-[41.5px] pt-[71px]"
      ></img>
      <div className="flex gap-[7px] pt-[25px] pr-[86px] pb-[21px] pl-[79px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/865a/b9cf/96a81f63746fc5146433d68082189f87?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F1~O02rCsIdFP86IquC8l1ZXoajQZx-EiINaKdvuUz4HkNUziwq~Faul-EqX5y7uIJGlc3ZURtIM2vnKVlG~yK5fZ0NPF8ZOV-DZDpBCN7CN1RbCwcXoMKI3bEUPxu5H-jBXB7tXnMnaBs71U-DR~rWGEDf-qbnNPS5UoYhnRUwl1DRMLEqIwiu-4zGUPVNlXM6RRBAAzpmiBqRMOfvKhcHabTY8C4PcPwY-51IwINb5o4RFkKWUNQ5UOLxxR46x3PXi4NfaKHBkX2OGlLqHlzM9MHSMejJYX38GczjZ9s~AwjF6fu4J5P0VYXYR81LI5~rTXSiuf41vCIkcvaYzjw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/badf/9579/1c7cad940549a7a420148fabe0d9f366?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kRQc-va3Ph2luEVtTJtCuTPcYW9EYBDG6JF~-7qA41-xm0lfTgAcTy2CoX5Z3Z7MB1M5s-vFO3x5vjN6LJ6Q4-tdtaEmLLciK0hOl2hhesynrAT8qyRe2gmt4qdcMFXMp-yKSvgERJN0HIzeC57~BsBuahQlbV66kY8L8G8NE-uGDU~G8YEcezcx2wFqghpN5myXwiRqFIuUyY15Xxl1Q18bYOpTsBTPybb8sn4uT0BtpRPFQ6KNNJIfsgBTAxzPRJ8q2w942h8AnpPMMEbJ3gCeh9qjbWaZWQAE2SP2FQeqm5O98qyCiagC69qBMnbYa9~WBvUHPrUf0NjA9oeDDg__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/5794/3202/e808d77abad5dabffc96c10a03d7c737?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr7Hr0mjUoygqkCuDOCdTFJ6oXhBiBfumtbyhTkJgqe3ynxs76EHJqNMQyV7m-6GxyUF9jGGWDZ2LYpUtFAXDSOJnyf6r9Dmw3L2GDTugNRQodxHGFKcQmcLIeSlpTeC2rlztVCARKAw332hJczJB5wDBSXdKmow6nz-fOR6eMEjDxqLkg0uL8amfHYE-EQXEcShvtg0Bu3dSPQ9zW7P4amSGmiyRzvIzdX2TbizUeaZRITOaI5W8D~6LFAuJIElEAtz0KY2kRav-iSfsfi9tcquIl~hW8j3w8jNNY3NHdS3JWWEjXCAuk1DqgQ0fl6mFsyPVpvXBO5XObk5uh-mhw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/7068/a316/4a1437cde8990eb8a05074bd7844af76?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a2S9q01sz~HKR87gWtmmoUwuvu6wFpjIxbssN3IvfdRYVAWFufJEUvpXe2SU-metg9Sah4wpnJ25urdzorXRHk2q4~hrjat1a4X9~ilgXrhJ0yPTZBicW50aGMaUDy7MXy3IXkx-GzVKiv69leLd6uhI9DfEXHDv0a1G-ZoPbhgi~5LdXX44hoFz1EaDmChdvltpPiJ94NrliWFPHQSPzbQo6AsLpozlUvv0AUfwFpV7GDAuj4cF6uMUgqfnYjw3qTn6mPCnRgu9iySOHe9LHUQEBtMwvaqZSBU8XBgxAkxZ0l3GK3jUKr1iauQ9XoYiIyImrQLe9iVlFO5Na3h3Tw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/c885/9a38/becf3dafbd1ac513c387931f8dd9004e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=frmEcpXI8cpUj9Al4eUEvzG8eTzYy8EC8hxWeQn7YBGj4DMfmc0kMKfSmH8ET7FK1yha1O7-wauMTRHeITl2oQlsolDJWa3vSRwx~GpqO17WtIab3P3SBQc1GfcNta4dqOiwuqLCg3KQbRzTSUEsqDujKKWR~JD2lsBCIb3b75xGFR7sBsPoSh~4qxcleeZEM7Wp81dV1Nz1ilXYH4YFLs5wvrC1jLh34zLmvuvTkY9TcQSswkgFet-GNHhAqP6njvbwgsBIGb7UJfEkLjVE8yXLHQd1bwVZ-cGIaZSaH~u4prSXIGgx7iWgCgbNp325L6k8kt4ED0o5aAUU9OmFAg__"
          className="w-3 h-3"
        ></img>
      </div>
      <div className="flex flex-col px-[30px] w-full h-[110px] justify-between">
        <div>
          <h2 className="text-[#B64400] font-bold text-[12px] ">
            Free Engraving
          </h2>
          <h1 className="text-black font-bold text-[16px] ">
            AirPods Max - Purple
          </h1>
        </div>
        <h3 className="text-black">$549.00</h3>
      </div>
    </div>
<div className="flex justify-center bg-neutral-400 ">
      {" "}
      <div className="flex items-center gap-[24px] justify-between md:justify-center px-[25px] w-full">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="44"
            viewBox="0 0 15 44"
            fill="none"
          >
            <path
              d="M13.5729 17.6825C13.052 18.0014 12.6205 18.4473 12.3189 18.9783C12.0172 19.5094 11.8552 20.1083 11.8481 20.719C11.8501 21.4064 12.0538 22.078 12.4338 22.6508C12.8138 23.2236 13.3535 23.6723 13.986 23.9413C13.7366 24.7459 13.3675 25.5084 12.8912 26.2031C12.2096 27.1843 11.4969 28.1654 10.4125 28.1654C9.32808 28.1654 9.04918 27.5354 7.79948 27.5354C6.58078 27.5354 6.14698 28.1861 5.15548 28.1861C4.16398 28.1861 3.47208 27.2772 2.67678 26.1618C1.62625 24.5993 1.04889 22.7668 1.01398 20.8842C1.01398 17.7858 3.02798 16.1437 5.01088 16.1437C6.06438 16.1437 6.94228 16.8356 7.60328 16.8356C8.23328 16.8356 9.21448 16.1023 10.4125 16.1023C11.0284 16.0864 11.6389 16.2223 12.19 16.4978C12.7411 16.7734 13.216 17.1802 13.5729 17.6825ZM9.84448 14.7907C10.3726 14.1695 10.6715 13.3859 10.6914 12.5707C10.6923 12.4633 10.6819 12.356 10.6604 12.2507C9.75323 12.3393 8.91438 12.7717 8.31588 13.4591C7.78268 14.0556 7.47248 14.8183 7.43798 15.6176C7.43838 15.7148 7.44877 15.8117 7.46898 15.9068C7.54049 15.9204 7.6131 15.9273 7.68588 15.9275C8.10395 15.8943 8.51089 15.7763 8.88197 15.5809C9.25305 15.3855 9.58052 15.1166 9.84448 14.7907Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </a>
        <div className=" gap-[24px] hidden md:flex">
          <a className="text-black font-normal text-[12px]" href="">
            Store
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Mac
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            iPad
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            iPhone
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Watch
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Vision
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            AirPods
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            TV & Home
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Entertainment
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Accessories
          </a>
          <a className="text-black font-normal text-[12px]" href="">
            Support
          </a>
        </div>
        <div className="flex gap-[24px] items-center">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="44"
              viewBox="0 0 16 44"
              fill="none"
            >
              <path
                d="M14.798 27.202L10.928 23.332C11.629 22.403 12.05 21.251 12.05 20C12.05 16.94 9.561 14.45 6.5 14.45C3.44 14.45 0.949997 16.94 0.949997 20C0.949997 23.061 3.44 25.55 6.5 25.55C7.751 25.55 8.903 25.129 9.832 24.428L13.702 28.298C13.853 28.449 14.052 28.526 14.25 28.526C14.448 28.526 14.646 28.45 14.798 28.298C15.101 27.995 15.101 27.505 14.798 27.202ZM2.05 20C2.05 17.546 4.047 15.55 6.5 15.55C8.954 15.55 10.95 17.547 10.95 20C10.95 22.453 8.954 24.45 6.5 24.45C4.046 24.45 2.05 22.454 2.05 20Z"
                fill="black"
                fill-opacity="0.8"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="44"
              viewBox="0 0 15 44"
              fill="none"
            >
              <path
                d="M11.8535 16.0283H10.833C10.7236 15.2173 10.3272 14.4723 9.71579 13.9284C9.10433 13.3845 8.31824 13.0776 7.5 13.0635C6.68176 13.0776 5.89567 13.3845 5.28421 13.9284C4.67275 14.4723 4.2764 15.2173 4.167 16.0283H3.147C2.58579 16.0286 2.04766 16.2517 1.65075 16.6485C1.25383 17.0452 1.03058 17.5833 1.03 18.1445V25.86C1.0305 26.4211 1.2536 26.9591 1.65034 27.356C2.04709 27.7528 2.58506 27.976 3.1462 27.9767H11.8532C12.4144 27.9762 12.9526 27.753 13.3494 27.3562C13.7463 26.9593 13.9695 26.4212 13.97 25.86V18.1445C13.9694 17.5834 13.7462 17.0454 13.3494 16.6486C12.9526 16.2519 12.4146 16.0288 11.8535 16.0283ZM7.5 14.1631C8.02741 14.1745 8.53512 14.3656 8.93918 14.7048C9.34325 15.0439 9.61948 15.5108 9.7222 16.0283H5.2778C5.38052 15.5108 5.65675 15.0439 6.06082 14.7048C6.46488 14.3656 6.97259 14.1745 7.5 14.1631ZM12.87 25.86C12.8697 26.1296 12.7625 26.388 12.572 26.5787C12.3814 26.7693 12.123 26.8767 11.8534 26.8771H3.1465C2.87694 26.8766 2.61856 26.7693 2.42801 26.5786C2.23746 26.388 2.13029 26.1295 2.13 25.86V18.1445C2.13032 17.875 2.23752 17.6166 2.4281 17.426C2.61869 17.2354 2.87708 17.1282 3.1466 17.1279H11.8536C12.1231 17.1282 12.3814 17.2355 12.572 17.4261C12.7625 17.6166 12.8697 17.875 12.87 18.1445V25.86Z"
                fill="black"
                fill-opacity="0.8"
              />
            </svg>
          </a>
          <a href="" className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 12H16"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 5H16"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="w-[313px] h-[500px] bg-white rounded-[18px] flex flex-col items-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/2609/ceeb/74c88a8937d995e24c37c91f4084949c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SIsyhvpXHmkEVQqCPa26sz~xpVpEVdUe43TZ3H2gtveWTQIb4zAJN1hBMBQxIdbBhZr20ZFNx95X3CfqsnriQBgaaOp9YjxEFKNumktBMOPgsawiuVBDXDe5RA46wil1qcAvWyeRYXThKzMuB-bgElRDWKZVuNIzmdOtrcaRHnOVrWnyc6qx77sGXV0pCRXR7Of4~vVO96vwDg49x2wHQz6Ut-NCaw8gw2E2oLG9MGzOZiBw0ANR79WaSQxBwX8K89kDxYjFZOvjlQcjcfAwuvCscZQoywDU2ssiQn0gMsZJRXA-zKKs405CF8YFk0LQYBfQO5FIv5razgprnufh9Q__"
        className="px-[41.5px] pt-[71px]"
      ></img>
      <div className="flex gap-[7px] pt-[25px] pr-[86px] pb-[21px] pl-[79px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/865a/b9cf/96a81f63746fc5146433d68082189f87?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F1~O02rCsIdFP86IquC8l1ZXoajQZx-EiINaKdvuUz4HkNUziwq~Faul-EqX5y7uIJGlc3ZURtIM2vnKVlG~yK5fZ0NPF8ZOV-DZDpBCN7CN1RbCwcXoMKI3bEUPxu5H-jBXB7tXnMnaBs71U-DR~rWGEDf-qbnNPS5UoYhnRUwl1DRMLEqIwiu-4zGUPVNlXM6RRBAAzpmiBqRMOfvKhcHabTY8C4PcPwY-51IwINb5o4RFkKWUNQ5UOLxxR46x3PXi4NfaKHBkX2OGlLqHlzM9MHSMejJYX38GczjZ9s~AwjF6fu4J5P0VYXYR81LI5~rTXSiuf41vCIkcvaYzjw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/badf/9579/1c7cad940549a7a420148fabe0d9f366?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kRQc-va3Ph2luEVtTJtCuTPcYW9EYBDG6JF~-7qA41-xm0lfTgAcTy2CoX5Z3Z7MB1M5s-vFO3x5vjN6LJ6Q4-tdtaEmLLciK0hOl2hhesynrAT8qyRe2gmt4qdcMFXMp-yKSvgERJN0HIzeC57~BsBuahQlbV66kY8L8G8NE-uGDU~G8YEcezcx2wFqghpN5myXwiRqFIuUyY15Xxl1Q18bYOpTsBTPybb8sn4uT0BtpRPFQ6KNNJIfsgBTAxzPRJ8q2w942h8AnpPMMEbJ3gCeh9qjbWaZWQAE2SP2FQeqm5O98qyCiagC69qBMnbYa9~WBvUHPrUf0NjA9oeDDg__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/5794/3202/e808d77abad5dabffc96c10a03d7c737?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zr7Hr0mjUoygqkCuDOCdTFJ6oXhBiBfumtbyhTkJgqe3ynxs76EHJqNMQyV7m-6GxyUF9jGGWDZ2LYpUtFAXDSOJnyf6r9Dmw3L2GDTugNRQodxHGFKcQmcLIeSlpTeC2rlztVCARKAw332hJczJB5wDBSXdKmow6nz-fOR6eMEjDxqLkg0uL8amfHYE-EQXEcShvtg0Bu3dSPQ9zW7P4amSGmiyRzvIzdX2TbizUeaZRITOaI5W8D~6LFAuJIElEAtz0KY2kRav-iSfsfi9tcquIl~hW8j3w8jNNY3NHdS3JWWEjXCAuk1DqgQ0fl6mFsyPVpvXBO5XObk5uh-mhw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/7068/a316/4a1437cde8990eb8a05074bd7844af76?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a2S9q01sz~HKR87gWtmmoUwuvu6wFpjIxbssN3IvfdRYVAWFufJEUvpXe2SU-metg9Sah4wpnJ25urdzorXRHk2q4~hrjat1a4X9~ilgXrhJ0yPTZBicW50aGMaUDy7MXy3IXkx-GzVKiv69leLd6uhI9DfEXHDv0a1G-ZoPbhgi~5LdXX44hoFz1EaDmChdvltpPiJ94NrliWFPHQSPzbQo6AsLpozlUvv0AUfwFpV7GDAuj4cF6uMUgqfnYjw3qTn6mPCnRgu9iySOHe9LHUQEBtMwvaqZSBU8XBgxAkxZ0l3GK3jUKr1iauQ9XoYiIyImrQLe9iVlFO5Na3h3Tw__"
          className="w-3 h-3"
        ></img>
        <img
          src="https://s3-alpha-sig.figma.com/img/c885/9a38/becf3dafbd1ac513c387931f8dd9004e?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=frmEcpXI8cpUj9Al4eUEvzG8eTzYy8EC8hxWeQn7YBGj4DMfmc0kMKfSmH8ET7FK1yha1O7-wauMTRHeITl2oQlsolDJWa3vSRwx~GpqO17WtIab3P3SBQc1GfcNta4dqOiwuqLCg3KQbRzTSUEsqDujKKWR~JD2lsBCIb3b75xGFR7sBsPoSh~4qxcleeZEM7Wp81dV1Nz1ilXYH4YFLs5wvrC1jLh34zLmvuvTkY9TcQSswkgFet-GNHhAqP6njvbwgsBIGb7UJfEkLjVE8yXLHQd1bwVZ-cGIaZSaH~u4prSXIGgx7iWgCgbNp325L6k8kt4ED0o5aAUU9OmFAg__"
          className="w-3 h-3"
        ></img>
      </div>
      <div className="flex flex-col px-[30px] w-full h-[110px] justify-between">
        <div>
          <h2 className="text-[#B64400] font-bold text-[12px] ">
            Free Engraving
          </h2>
          <h1 className="text-black font-bold text-[16px] ">
            AirPods Max - Purple
          </h1>
        </div>
        <h3 className="text-black">$549.00</h3>
      </div>
    </div>
///////////////////////////////
    <div className="w-[417px] h-[236px] relative">
      <img src="https://s3-alpha-sig.figma.com/img/52a9/31e7/04c5646e473e9c81240f4f8a2c23083b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kgz3FjjsjVRNPpaPQfQ1x0sM4EBEPI07WqQ~-REjqZzH5XuJGaHaewye1tXCj9~QYGVtB0Dw4Ah0KS5M6t~438tfisNJ3BgEyV0uW8Z4GkykbGiErkv-EglovDmlT87C8HloBL0Lu7yAX0buMVQYrJJQy2kFL0ZvVqn6vjEd1nsCuULyvPVl8nwa0JUnuUVGtHEKSP26878XUwAbCSromByVkYkgif~K2AGUS~RGgCr-kN58sjq5T40JCBgbfZ-ruo1QTEl4IVo9jHSuW2ySd5Ia28FsFvS~imn5P~lD0LAsbZOmOruuW-lqSJYafppl6~9FUlBS8fco2JaO2NRRQA__"></img>
      <div className="flex absolute bottom-4 w-full justify-around items-center">
        <h1 className="font-bold text-white text-[14px]">
          NBA 2K25 Arcade Edition
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="15"
          viewBox="0 0 68 15"
          fill="none"
        >
          <path
            d="M20.7099 11.1208H15.8198L14.6469 14.5894H12.575L17.2069 1.75826H19.3579L23.9898 14.5894H21.8828L20.7099 11.1208ZM16.3272 9.52089H20.2024L18.2903 3.8921H18.2376L16.3272 9.52089ZM25.082 5.23388H26.9133V6.82504H26.9572C27.268 5.7309 28.1038 5.08284 29.2065 5.08284C29.4822 5.08284 29.7227 5.12675 29.8649 5.15485V6.94271C29.7139 6.88124 29.3768 6.83558 29.0028 6.83558C27.7667 6.83558 27.0029 7.66277 27.0029 8.98699V14.5894H25.082V5.23388ZM36.8884 8.45309C36.6935 7.45729 35.9455 6.66522 34.6936 6.66522C33.2081 6.66522 32.2318 7.90162 32.2318 9.91077C32.2318 11.9656 33.2186 13.1563 34.7129 13.1563C35.8946 13.1563 36.6689 12.5065 36.8902 11.4229H38.7391C38.5336 13.4145 36.9428 14.7668 34.6936 14.7668C32.0176 14.7668 30.2758 12.935 30.2758 9.91253C30.2758 6.94271 32.0176 5.06704 34.676 5.06704C37.0851 5.06704 38.5512 6.61429 38.7215 8.45484L36.8884 8.45309ZM39.7259 11.9305C39.7259 10.2936 40.9796 9.28906 43.2025 9.16437L45.7625 9.01333V8.29327C45.7625 7.25357 45.0602 6.6301 43.8873 6.6301C42.7758 6.6301 42.0822 7.164 41.9137 7.99997H40.0999C40.207 6.31046 41.6468 5.06528 43.9575 5.06528C46.2243 5.06528 47.6729 6.2648 47.6729 8.14223V14.5894H45.8328V13.0509H45.7889C45.2463 14.0906 44.0646 14.7492 42.8373 14.7492C41.0059 14.7492 39.7259 13.6112 39.7259 11.9305ZM45.7625 11.0857V10.3481L43.4606 10.4903C42.314 10.5711 41.6643 11.0769 41.6643 11.8778C41.6643 12.6962 42.3403 13.2301 43.371 13.2301C44.7125 13.2283 45.7625 12.3045 45.7625 11.0857ZM49.0232 9.91253C49.0232 6.96027 50.5876 5.0846 52.9352 5.0846C54.2767 5.0846 55.3443 5.76075 55.8693 6.79167H55.9044V1.75826H57.8341V14.5894H55.9658V12.9983H55.9307C55.3794 14.0643 54.3136 14.7492 52.9528 14.7492C50.5876 14.7492 49.0232 12.863 49.0232 9.91253ZM50.988 9.91253C50.988 11.8866 51.9396 13.123 53.4602 13.123C54.9351 13.123 55.9219 11.869 55.9219 9.91253C55.9219 7.97363 54.9351 6.70211 53.4602 6.70211C51.9396 6.70211 50.988 7.94729 50.988 9.91253ZM67.6529 11.8409C67.386 13.548 65.7688 14.7668 63.6267 14.7668C60.8805 14.7668 59.2177 12.9087 59.2177 9.95644C59.2177 7.02174 60.9068 5.06528 63.5477 5.06528C66.1428 5.06528 67.7617 6.89705 67.7617 9.73339V10.392H61.1562V10.5079C61.1562 12.1342 62.1342 13.2108 63.6723 13.2108C64.7662 13.2108 65.5739 12.6593 65.832 11.8409C65.8303 11.8409 67.6529 11.8409 67.6529 11.8409ZM61.1632 9.04846H65.8391C65.7952 7.61711 64.8874 6.61254 63.5459 6.61254C62.2044 6.61254 61.2615 7.63467 61.1632 9.04846ZM7.72703 3.01047C8.20638 2.40983 8.53297 1.60371 8.44693 0.780029C7.74459 0.815154 6.88773 1.24368 6.39082 1.84432C5.94483 2.3589 5.55152 3.19839 5.65336 3.9887C6.44174 4.05719 7.23012 3.59354 7.72703 3.01047ZM8.43816 4.14149C7.29333 4.073 6.31883 4.7913 5.77276 4.7913C5.22493 4.7913 4.38738 4.17486 3.48311 4.19242C2.30493 4.20999 1.21102 4.8756 0.612276 5.93638C-0.618584 8.05793 0.287441 11.2051 1.48494 12.9315C2.06613 13.7868 2.76672 14.7282 3.68855 14.693C4.56121 14.6597 4.90185 14.1275 5.96239 14.1275C7.02117 14.1275 7.32845 14.693 8.25203 14.6755C9.20898 14.6579 9.80773 13.8202 10.3889 12.9649C11.0561 11.9902 11.3283 11.0488 11.3459 10.9979C11.3283 10.9803 9.50045 10.2796 9.48289 8.1756C9.46533 6.41408 10.9192 5.57635 10.9859 5.52366C10.1642 4.3136 8.88239 4.17662 8.43816 4.14149Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
