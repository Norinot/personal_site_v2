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
  };
}

export const ICON_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: provideIcons,
  deps: [IconRegistryService],
  multi: true,
};
