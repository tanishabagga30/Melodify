const Cover = ({ image, children }) => (
  <>
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className='cover'
    />
    {children}
  </>
);

export default Cover;
