export function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="idCard">
      <div className="profilePic">
        <img src={picture} alt="profile-pic" height={200} />
      </div>
      <div className="dates">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
        {/* another option: ... .toString().split(" ").slice(0,4).join(" ")} */}
      </div>
    </div>
  );
}
