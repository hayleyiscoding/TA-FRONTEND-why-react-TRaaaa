function Color(props) {
  return (
    <div className='flex' style={{ padding: "1rem 0rem" }}>
      <div className='color-name flex-20'>{props.name}</div>
      <div className='flex-80'>
        <ul className='flex justify-between wrap'>
          {props.allHexCodes.map((color, index) => {
            return (
              <li className='flex-15' style={{ margin: "0.5rem 0.5rem" }}>
                <div
                  style={{
                    backgroundColor: `${color}`,
                    height: "40px",
                    width: "180px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.2rem 0rem",
                  }}
                >
                  <span style={{ fontWeight: "bolder" }}>
                    {index === 0 ? 50 : index * 100}
                  </span>
                  <span>{color}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Color;
