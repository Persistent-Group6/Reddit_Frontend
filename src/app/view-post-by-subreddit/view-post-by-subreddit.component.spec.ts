import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostBySubredditComponent } from './view-post-by-subreddit.component';

describe('ViewPostBySubredditComponent', () => {
  let component: ViewPostBySubredditComponent;
  let fixture: ComponentFixture<ViewPostBySubredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostBySubredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostBySubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
