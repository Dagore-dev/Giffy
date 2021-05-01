import { Link } from 'wouter';

import './styles.css';

export default function Category({ name, options = [] }) {
    return (
      <section>
        <h2>{name}</h2>
        
        <ul className='trends'>

            {options.map((singleOption) => (
            
                <li className='trends__item' key={singleOption.id}>
                            
                  <Link className='trends__link' to={`/gif/${singleOption.id}`}>
                      {singleOption.title.substring(0, singleOption.title.indexOf('GIF'))}
                  </Link>
                
                </li>
            
            ))}

        </ul>

      </section>
    );
  }