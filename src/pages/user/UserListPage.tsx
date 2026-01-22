import { NavLink, useParams } from "react-router";

export default function UserListPage() {
  const params = useParams()

  return (<>
    List of User
    <NavLink to={"/admin/user"} >
      Username: Ramu
    </NavLink>
    {
      params.userId ? params.userId : ""
    }
  </>)
}