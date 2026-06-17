// export const toastStyleObject = () => {
//   const isMobile = window.innerWidth <= 600;

//   return {
//     position: isMobile ? "top-center" : "bottom-left",
//     autoClose: 3000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//     style: {
//       fontFamily: "AndaleMono",
//       backgroundColor: "smoke",
//       color: "white",
//       fontSize: "12px",
//       width: isMobile ? "50%" : "auto",
//       height: "auto",
//       padding: isMobile ? null : "2rem",
//       marginTop: isMobile ? "3rem" : null,
//       marginLeft: isMobile ? "1rem" : null,
//       borderRadius: isMobile ? "1rem" : null,
//     },
//   };
// };

// export const toastStyleObject = () => {
//   const isMobile = window.innerWidth <= 600;

//   return {
//     position: isMobile ? "top-center" : "bottom-left",
//     autoClose: 2500,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",

//     style: {
//       fontFamily: "AndaleMono",
//       fontSize: "13px",
//       letterSpacing: "0.2px",

//       background: "rgba(20, 20, 20, 0.85)",
//       color: "#f5f5f5",

//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",

//       border: "1px solid rgba(255, 255, 255, 0.08)",
//       borderRadius: "12px",

//       padding: "12px 14px",

//       boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",

//       maxWidth: isMobile ? "90vw" : "320px",
//     },
//   };
// };

export const toastStyleObject = () => {
  const isMobile = window.innerWidth <= 600;

  return {
    position: isMobile ? "top-center" : "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",

    style: {
      fontFamily: "AndaleMono",
      background: "rgba(20, 20, 20, 0.65)",
      color: "#f5f5f5",
      fontSize: "12px",

      width: isMobile ? "70vw" : "90vw",
      maxWidth: "320px",

      padding: "14px 18px",
      borderRadius: "14px",

      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",

      border: "1px solid rgba(255, 255, 255, 0.08)",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  };
};
