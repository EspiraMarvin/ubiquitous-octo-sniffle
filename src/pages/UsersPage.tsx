import { useEffect, useState } from 'react'
import { fetchUsers, fetchAllAlbums } from '../services/requests'
import Loader from '../components/ui/Loader'
import UsersList from '../components/users/UsersList'
import useTitle from '../hooks/useTitle'
import { Album, UserAlbum } from '../interfaces/typings'

function UsersPage() {
  useTitle('Users List')
  const [users, setUsers] = useState<UserAlbum[]>([])
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsersAndAlbums = async () => {
      setLoading(true)
      const [albumsRes, usersRes] = await Promise.all([
        fetchAllAlbums(),
        fetchUsers(),
      ])
      await usersRes.map((user: any) => {
        user.albumCount = albumsRes.filter(
          (album: any) => album.userId === user.id
        ).length
      })
      setUsers(usersRes)
      setAlbums(albumsRes)
      setLoading(false)
    }
    fetchUsersAndAlbums()

    return () => {
      //clean up hook
    }
  }, [])

  if (loading)
    return (
      <div className="flex mt-28 justify-center items-center">
        <Loader />
      </div>
    )

  return (
    <div className="pageMargin">
      {/* <Header title={'Users List'} /> */}
      <header className="mt-8 md:mt-20 mb-8 text-center text-xl">
        Users List
      </header>
      <section>
        <UsersList users={users} />
      </section>
    </div>
  )
}

export default UsersPage
