interface RepositoryItemProps {
    repository: {
        name: String,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props:RepositoryItemProps) {
    return (
        <li>
            <strong>{ props.repository?.name ?? 'default' } </strong>
            <p> { props.repository?.description ?? 'Forms' }</p>
            <a href={props.repository?.html_url ?? ''}>
                Acessar Repositório
            </a>
        </li> 
    )
}