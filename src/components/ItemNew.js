
export const ItemNew = ({ item }) => {

    const { urlToImage, url, title, description} = item;

    return (
        <div className="col s12 m6 l4 card-style"  >
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                </div>
                <div className="card-content">
                    <h5> {title} </h5>
                    <p>{description}</p>
                </div>

                <div className="card-action" >
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className= "waves-effect waves-light btn" 
                    >
                        View more..
                    </a>
                </div>

            </div>
        </div>
    )
}
