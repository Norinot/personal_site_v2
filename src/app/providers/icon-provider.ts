import { APP_INITIALIZER } from '@angular/core';
import { IconRegistryService } from '../services/icon-registry.service';

export function provideIcons(iconRegistry: IconRegistryService) {
  return () => {
    iconRegistry.registerIcon('angular', '/icons/angular.svg');
    iconRegistry.registerIcon('csharp', '/icons/csharp.svg');
    iconRegistry.registerIcon('git', '/icons/git.svg');
    iconRegistry.registerIcon('go', '/icons/go.svg');
    iconRegistry.registerIcon('java', '/icons/java.svg');
    iconRegistry.registerIcon('javascript', '/icons/javascript.svg');
    iconRegistry.registerIcon('react', '/icons/react.svg');
    iconRegistry.registerIcon('typescript', '/icons/typescript.svg');
    iconRegistry.registerIcon('html', '/icons/html.svg');
    iconRegistry.registerIcon('unity', '/icons/unity.svg');
    iconRegistry.registerIcon('github', '/icons/github.svg');
    iconRegistry.registerIcon('linkedIn', '/icons/linkedIn.svg');
    iconRegistry.registerIcon('codeIcon', '/icons/codeIcon.svg');
    iconRegistry.registerIcon('groupIcon', '/icons/groupIcon.svg');
    iconRegistry.registerIcon('maintenanceIcon', '/icons/maintenanceIcon.svg');
    iconRegistry.registerIcon('serverIcon', '/icons/serverIcon.svg');
  };
}

export const ICON_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: provideIcons,
  deps: [IconRegistryService],
  multi: true,
};
