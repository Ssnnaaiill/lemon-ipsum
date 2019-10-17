# million-blog
> [reference](https://velopert.com/2597)

## 준비
ajax 요청을 위해 `axios` 라이브러리를 설치합니다. 또한, jQuery 대신 Sementic UI를 사용하기 위해 `sementic-ui-react`, `sementic-ui-css`와 같은 라이브러리도 yarn을 통해 설치합니다.
```
$ yarn add axios
$ yarn add sementic-ui-react sementic-ui-css
```

[JSONPlaceHolder](https://jsonplaceholder.typicode.com/)에서 이미 만들어진 *가짜* API 중에서 `post`와 `comment`를 사용하도록 하겠습니다.

### 1. post: 포스트 읽기
**`GET https://jsonplaceholder.typicode.com/posts/:id`**
```javascript
GET https://jsonplaceholder.typicode.com/posts/1

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
- 설명: `id` 를 가진 게시물의 내용을 불러옵니다. `:id` 부분에는 1~100 사이의 숫자가 들어갑니다.

### 2. comment: 포스트에 달린 댓글 읽기
**`GET https://jsonplaceholder.typicode.com/posts/:id/comments`**
```javascript
GET https://jsonplaceholder.typicode.com/posts/1/comments

[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
]
```
- 설명: `id` 를 가진 게시물의 덧글들을 불러옵니다. `:id` 부분에는 1~100 사이의 숫자가 들어갑니다.