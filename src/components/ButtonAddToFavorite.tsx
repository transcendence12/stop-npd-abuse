
interface ButtonAddToFavoriteProps {
    specialistId: string;
}
export const ButtonAddToFavorite:React.FC<ButtonAddToFavoriteProps> = ({specialistId}) => {
    return (
        <button className="text-red-700">❤ Dodaj do ulubionych</button>
    )
}