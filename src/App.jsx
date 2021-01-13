import React, { useState } from 'react';
import Menu from './menu/Menu';

import './App.css';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Главная', href: './menu', icon: 'android' },
    { value: 'Главная', href: './menu', icon: 'android' },
    { value: 'Главная', href: './menu', icon: 'android' },
    { value: 'Главная', href: './menu', icon: 'android' },
  ];
  return (
    <div className='app'>
      <nav>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          modi inventore reiciendis asperiores nihil officiis minima voluptate
          voluptatibus error? Quaerat libero similique officiis iusto sapiente
          culpa modi consequatur cum, dolorum dolores? Nesciunt odit culpa
          impedit nisi quasi dignissimos incidunt accusantium. Assumenda nemo,
          maiores similique qui optio quo quam autem, voluptates ab totam rem
          placeat! Culpa modi numquam iste tempore omnis vero dignissimos sed
          recusandae eligendi, ullam neque eos id ratione expedita quasi fugit
          maiores quod reprehenderit doloribus! Cupiditate autem deleniti
          deserunt harum quam temporibus qui cum, praesentium distinctio velit
          nesciunt. Assumenda quisquam impedit laudantium excepturi deserunt
          quidem ad saepe maiores, dolor recusandae aperiam maxime nisi
          consequuntur nostrum vitae mollitia doloribus quaerat, quae iure ex
          quos placeat voluptatibus, magni velit. Quas illum quis placeat cumque
          itaque ipsa corporis consequatur et expedita, corrupti beatae autem
          nulla quo molestiae, provident totam. Culpa, nulla. Minus impedit
          deserunt nesciunt asperiores maiores error quo id eveniet.
        </p>
      </main>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={'Burger menu'}
        items={items}
      />
    </div>
  );
};

export default App;
