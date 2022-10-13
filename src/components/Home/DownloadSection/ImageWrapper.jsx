const ImageWrapper = () => {
    return (
        <div style={{ display: 'flex' }}>
            <img src="images/1.png" alt="first" style={{ position: 'relative', left: '120px', height: '267px' }} />
            <img src="images/2.png" alt="seconnd" style={{ position: 'relative', right: '120px', height: '267px' }} />
            <img src="images/3.png" alt="third" style={{ position: 'relative', bottom: '22px', right: '606px' }} />
        </div>
    );
};

export default ImageWrapper;