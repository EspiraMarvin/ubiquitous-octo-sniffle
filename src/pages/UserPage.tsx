import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchUser, fetchUserAlbums } from '../services/requests'
import useTitle from '../hooks/useTitle'
import Loader from '../components/ui/Loader'
import UserDetails from '../components/users/UserDetails'
import AlbumList from '../components/albums/AlbumList'
import { User } from '../interfaces/typings'

function UserPage() {
  useTitle('User Information')
  let { userId } = useParams()

  const [user, setUser] = useState<User>()
  const [userAlbums, setUserAlbums] = useState([])

  useEffect(() => {
    // fetch user information and user's albums
    const fetchUserInfoAndAlbums = async () => {
      const [userRes, userAlbumsRes] = await Promise.all([
        fetchUser(userId),
        fetchUserAlbums(userId),
      ])
      setUser(userRes)
      setUserAlbums(userAlbumsRes)
    }
    fetchUserInfoAndAlbums()

    return () => {
      //clean up hook
    }
  }, [])

  if (!user || !userAlbums)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader color="blue" />
      </div>
    )

  return (
    <div className="mt-20 pageMargin sm:mt-16">
      <section className="flex flex-row items-center justify-center mb-8 text-left">
        <Link to={'/users'}>
          <button className="button largeScreenBtnPosition ">Go Back</button>
        </Link>

        <div className="mt-4 text-xl text-center">{user?.name} Information</div>
      </section>
      <section>
        <UserDetails user={user} />
        <div className="h-full max-h-screen overflow-y-auto ">
          <AlbumList {...{ user, userAlbums }} />
        </div>
      </section>
    </div>
  )
}

export default UserPage
