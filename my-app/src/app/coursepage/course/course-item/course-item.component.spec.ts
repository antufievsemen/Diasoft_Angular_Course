import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  const {build} = setup<CourseItemComponent>();
  

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('course should have fields', () => {
    component.course = {id: 1, creationDate: new Date(), description: 'description', duration: 12, title:'title', authors: [{id: '2', name: 'Name'}]}
    expect(component.course.id).toBeDefined();
    expect(component.course.creationDate).toBeDefined();
    expect(component.course.description).toBeDefined();
  });
});

function setup<T>(): { default: () => any; build: () => T; [key: string]: any } {
  const builder = {
    default(): any {
      return builder;
    },
    build(): any {
      return new CourseItemComponent();
    }
  };
  return builder;
}
