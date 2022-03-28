export const getPermissionDto = permission => {
  const permissionDto = permission.map(permission => {
    return {
      _id: permission._id,
      admin: permission.admin,
      module: {
        _id: permission.module._id,
        app: permission.module.app,
        api: permission.module.api,
        name: permission.module.name,
        active: permission.module.active
      },
      permissions: {
        read: permission?.read || false,
        create: permission?.create || false,
        update: permission?.update || false,
        destroy: permission?.destroy || false,
        approve: permission?.approve || false
      }
    }
  })
  return permissionDto
}
