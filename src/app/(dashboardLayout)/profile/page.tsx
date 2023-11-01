const ProfilePage = () => {
  return (
    <div>
      <h1>Welcome back to your profile</h1>
      {[...Array(20)].map((_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
          distinctio mollitia necessitatibus! Praesentium, deserunt ea iste
          voluptates dolorem natus, non modi ab molestias magnam quod iure nulla
          perferendis velit laborum. Voluptatem, pariatur harum! Provident ipsam
          nam doloribus iste possimus.
        </p>
      ))}
    </div>
  );
};

export default ProfilePage;
