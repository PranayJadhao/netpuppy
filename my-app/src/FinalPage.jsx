import React from "react";

const FinalPage=()=>{
return (
  <div>
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
        justifyContent: "space-around",
      }}
    >
      <div style={{ lineHeight: "-10px", width: "30%" }}>
        <h3>FIND YOUR</h3>
        <h2>FOCUS</h2>
      </div>
      <div style={{ display: "flex", gap: "15%" }}>
        <ul>
          <li>FAQ</li>
          <li>Calender</li>
          <li>E-Prospectus</li>
        </ul>
        <ul>
          <li>Registration Form</li>
          <li>Blogs</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "40%", left: "40%" }}>
        BECOME A PART OF THE...
      </div>
      <div style={{ position: "absolute", top: "45%", left: "50%" }}>
        TULA'S FAMILY
      </div>
      <div style={{ position: "absolute", top: "55%", left: "30%" }}>
        VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR
      </div>
      <div style={{ position: "absolute", top: "60%", left: "40%" }}>
        Dehradun, Uttarakhand, 248197
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "65%",
          left: "30%",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <li>(+91) 9458311000 </li>
          <li>info@tis.edu.in</li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "80%",
          left: "30%",
          gap: "40px",
        }}
      >
        <button
          style={{
            padding: "5%",
            backgroundColor: "red",
            color: "white",
            border: "none",
          }}
        >
          VIRTUAL TOUR
        </button>
        <button
          style={{
            padding: "5%",
            backgroundColor: "red",
            color: "white",
            border: "none",
          }}
        >
          APPLY NOW
        </button>
        <button
          style={{
            padding: "5%",
            backgroundColor: "red",
            color: "white",
            border: "none",
          }}
        >
          fedena LOGIN
        </button>
      </div>
      <img
        style={{ width: "100%" }}
        src="https://s3-alpha-sig.figma.com/img/f558/8cd0/91093103616e209a8817aa831fd61f6f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdX9fyPAj3L-ndVRXu~9cwvqgdHDRlddK3v0tMOBPU00Z2jlBk931lY8h7gR74lT5~~hgEV3inf-BwyMCNyCNHvzSY~idMIiaM5cmvp035~pPTRcN875KZaDARupPBO-6CcDiyJGCm2anMh6rXA5mXDC-dRI~wKGHr20sGkxcWdimD3S~BLpoeHZw~JgrUqpnSrzFn73XLO0vJmCGWlEp7g9J3GnACJ6zuDmONOM-m~m~DF81mkBXn52wty82R34wSFGXZbDxSB~7lPONyS7lOk0eo4VeVEdPPnAmMPTL0FcYxLfrR6WtGyNq5bjffGWuIq1e0Y99-Rm7nubaBytow__"
      ></img>
    </div>
  </div>
);
}

export default FinalPage;