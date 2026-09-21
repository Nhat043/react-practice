# Buoi 01 - Component, Props, State va Event

## Muc tieu

Tu code mot `CounterCard` co props, state va event handler. Bai nay nho nhung la nen cho cach React render lai UI khi state thay doi.

Thoi gian: 60 phut.

Doc truoc: [React core](../knowledge/20_react.md).

## De bai

Tao trang `Counter Playground` gom 3 the dem. Moi the nhan props `title`, `initialValue`, `step`.

Moi the co:

- hien thi `title` va gia tri hien tai;
- nut `+` tang theo `step`;
- nut `-` giam theo `step`;
- nut Reset ve `initialValue`;
- khong cho gia tri nho hon 0;
- neu gia tri >= 10, hien chu `Goal reached`.

Trang cha phai render 3 the co props khac nhau: Tickets, Customers, Draft replies.

## Dieu kien

- Dung function component va TypeScript props type.
- `CounterCard` tu quan ly gia tri cua chinh no bang `useState`.
- Khong dung bien thong thuong (`let count = 0`) de lam state UI.
- Khong copy-paste 3 component; phai tai su dung mot `CounterCard`.
- Khong dung `useEffect`, `useMemo`, context hay state library.

## Tu test

1. Bam `+` o Tickets, Customer co thay doi khong? Tai sao?
2. Bam `-` den 0 roi bam tiep, co xuong am khong?
3. Bam Reset sau khi tang 5 lan, state co ve dung `initialValue` khong?
4. Sua prop `step` cua mot card, logic co con dung khong?

## Goi y 1

State can phai nam trong component can thay doi no.

```tsx
type CounterCardProps = {
  title: string;
  initialValue: number;
  step: number;
};
```

Khi state moi phu thuoc state cu, dung functional update de React luon dung gia tri moi nhat.

```tsx
setCount((current) => current + step);
```

## Goi y 2

Skeleton toi thieu:

```tsx
function CounterCard({ title, initialValue, step }: CounterCardProps) {
  const [count, setCount] = useState(initialValue);

  return <section>{/* title, count, buttons */}</section>;
}
```

Button minus nen tinh gia tri moi bang `Math.max(0, current - step)`.

## Cau hoi tu kiem tra

1. Vi sao `let count = initialValue` khong lam UI render lai sau khi bam button?
2. Props co duoc component con sua truc tiep khong? Vi sao?
3. `setCount(count + step)` va `setCount((current) => current + step)` khac nhau trong truong hop nao?
4. Tai sao ba `CounterCard` co state doc lap du cung dung mot component?

## Bai nang cao

Them prop `maxValue?: number`. Khi co `maxValue`, button `+` khong duoc tang qua nguong va phai bi disable khi da dat nguong. Giai thich: state nao la source of truth, gia tri nao co the derive truc tiep khi render.

## Nhat ky hoc

Sau khi xong, tu viet vao file ghi chu cua ban:

```text
Buoi 01
- Toi da tu code duoc:
- Loi toi gap:
- Nguyen nhan:
- Cach toi sua:
- Khai niem can on lai:
```
