import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.loadingText}>Loading...</h1>
    </div>
  );
};

// أنماط CSS ككائن
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh', 

    color: '#462576',

    flexDirection: 'column',
  },
  loadingText: {
    fontSize: '2.5rem', 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
};

export default Loading;
