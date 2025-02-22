import { cold } from 'jasmine-marbles';
import { CourseService } from './course.service';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/domain/course';

describe('CourseService', () => {
  let service: CourseService;
  const url = '/videocourses';
  const { build, httpClient } = setup<CourseService>();

  beforeEach(() => {
    service = build();
  });

  afterEach(() => {
    httpClient.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courses', () => {
    const expected: Course[] = [{ id: 1, title: 'title', description: 'description', duration: 11, creationDate: new Date(), authors: [{ id: '2', name: 'author' }] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getList()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${url}?_start=0&_limit=5`);
  });

  it('should get course with id', () => {
    const expected: Course[] = [{ id: 1, title: 'title', description: 'description', duration: 11, creationDate: new Date(), authors: [{ id: '2', name: 'author' }] }];
    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getItemById(1)).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(`${url}/1`);
  });

  it('should post course', () => {
    const expected: Course = { id: 1, title: 'title', description: 'description', duration: 11, creationDate: new Date(), authors: [{ id: '2', name: 'author' }] };
    httpClient.post.and.returnValue(cold('-a', { a: expected }));

    expect(service.createCourse(expected)).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.post).toHaveBeenCalledOnceWith(`${url}`, expected);
  });

  it('should put course', () => {
    const expected: Course = { id: 1, title: 'title', description: 'description', duration: 11, creationDate: new Date(), authors: [{ id: '2', name: 'author' }] };
    httpClient.put.and.returnValue(cold('-a', { a: expected }));

    expect(service.update(expected)).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.put).toHaveBeenCalledOnceWith(`${url}/1`, expected);
  });

  it('should delete pokemons', () => {
    const expected: Course = { id: 1, title: 'title', description: 'description', duration: 11, creationDate: new Date(), authors: [{ id: '2', name: 'author' }] };
    httpClient.delete.and.returnValue(cold('-a', { a: expected }));

    expect(service.remove(expected)).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.delete).toHaveBeenCalledOnceWith(`${url}/1`);
  });
});

function setup<T>(): { default: () => any; build: () => T; httpClient: SpyOf<HttpClient>, [key: string]: any } {
  const httpClient: SpyOf<HttpClient> = autoSpy(HttpClient);
  const builder = {
    httpClient,
    default(): any {
      return builder;
    },
    build(): any {
      return new CourseService(httpClient);
    }
  };
  return builder;
}

function autoSpy<T>(obj: new (...args: any) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as SpyOf<T>;

  Object.getOwnPropertyNames(obj.prototype).forEach((key) => {
    // @ts-ignore
    res[key] = jasmine.createSpy(key);
  });
  return res;
}

type SpyOf<T> = T & Partial<{ [k in keyof T]: T[k] extends (...args: any[]) => any ? jasmine.Spy : T[k] }>;