function UserListItem({ user }: { user: any }) {
  return (
    <div
      className="flex items-center justify-between py-1 pl-2 m-4 transition-all bg-gray-200 hover:bg-gray-100 "
      data-testid={`user-item-${user.id}`}
    >
      <div className="">{user.name}</div>
      <div className="p-1 mr-4 bg-white">{user.albumCount}</div>
    </div>
  )
}

export default UserListItem
