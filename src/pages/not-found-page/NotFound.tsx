export default function NotFound(): JSX.Element {
  return (
    <div style={{backgroundColor: '#ffffff'}}>
      <div className="error__wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr',maxWidth: "1440px", alignItems: 'center', justifyItems: 'center', margin: '0 auto', padding: '15px' }}>
        <div className="error__image-wrapper">
          <img src="img/not-found-image.png" width="400" height="800" alt="crying girl" />
        </div>
        <div className="error__text-wrapper">
          <p style={{color: 'blue', fontSize: '60px'}}>LOOKS LIKE YOU ARE LOST, FRIEND</p>
          <p style={{color: 'blue', fontSize: '28px'}}>The page you are looking for can't be found</p>
        </div>
      </div>
    </div>
  )
}
