import { CountryType } from "../App"

const Country = ({ country, children }: { country: CountryType, children: string; }) => {
    return (
        <div>
            <div className="card w-75 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text">{country.description}</p>
                    <a href="#" className="btn btn-primary">Button</a>
                    <div>
                        {children}
                    </div>
                </div>
                <div className="card-footer">
                    <div dangerouslySetInnerHTML={{__html: country.disclaimer}} />
                </div>
            </div>
        </div>
    )
}

export default Country