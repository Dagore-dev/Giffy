import { Link } from 'wouter';

export default function Category({ name, options = [] }) {
    return (
      <section>
        <h2>{name}</h2>
        
        <ul>

            {options.map((singleOption) => (
            
                <li key={singleOption.id}>
                            
                <Link to={`/gif/${singleOption.id}`}>
                    {singleOption.title}
                </Link>
                
                </li>
            
            ))}

        </ul>

      </section>
    );
  }