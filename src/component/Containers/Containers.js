import './Containers.css';


export function ContainerRow({children}){
    return(
        <div className='container-row'>
            {children}
        </div>
    );
}


export function ContainerCenter({children}){
    return(
        <div className='container-center'>
            {children}
        </div>
    );
}


