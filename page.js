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
  );
}
