const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export function EscapeBack() {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <img
        className="rounded-full my-3"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
