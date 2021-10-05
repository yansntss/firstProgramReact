type Props = {
    name: string;
    age: number;
}
export const Header = ({ name, age}: Props) => {

    return (
        <header>
            <h1>Olá {name} sua idade {age}</h1>
        </header>
    )
};
