import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/role';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];

  constructor(private roleService: RoleService, private router: Router) {}

  ngOnInit() {
    
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoleList().subscribe(roles => {
      console.log(roles);
      this.roles = roles;
    });
  }

  goToCreateRole() {
    this.router.navigate(['/roles/create']);
  }

  goToUpdateRole(roleId: number) {
    this.router.navigate(['/roles/update', roleId]);
  }

  deleteRole(roleId: number) {
    this.roleService.deleteRole(roleId).subscribe(() => {
      this.getRoles();
    });
  }
}
