import { Permissions } from '@/lib/permissions'

class User {}

const user = new User()

function inUserAdmin() {
  return Permissions.granted(user, 'admin')
}