(this["webpackJsonpgordian-knot-dashboard"] =
  this["webpackJsonpgordian-knot-dashboard"] || []).push([
  [0],
  {
    190: function (e, t, a) {},
    192: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(13),
        s = a.n(c),
        o = a(17),
        i = a(26),
        l = Object(i.a)();
      var d = {
          ACCESS_TOKEN: "ACCESS_TOKEN",
          LOGGED_USER: "LOGGED_USER",
          SELECTED_PROJECT: "SELECTED_PROJECT",
        },
        j = a(1);
      var b = (e) => {
          let { component: t, user: a, ...n } = e;
          const r = localStorage.getItem(d.ACCESS_TOKEN);
          return Object(j.jsx)(o.b, {
            ...n,
            render: (e) =>
              r
                ? Object(j.jsx)(t, { ...e, token: r })
                : Object(j.jsx)(o.a, { to: "/" }),
          });
        },
        u = a(6),
        p = a(5),
        x = a(12),
        O = a.n(x);
      const h = "https://gordianknot.xyz/api",
        m = "auth";
      var g = async (e, t) => {
          try {
            return (
              await O.a.post("".concat(h, "/").concat(m, "/login"), {
                username: e,
                password: t,
              })
            ).data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        },
        f = async (e, t) => {
          try {
            return (
              await O.a.post("".concat(h, "/").concat(m, "/register"), {
                username: e,
                password: t,
              })
            ).data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        },
        v = a(230),
        y = a(244);
      const C = Object(n.createContext)(),
        k = (e) => {
          let { children: t } = e;
          const [a, r] = Object(n.useState)({}),
            [c, s] = Object(n.useState)();
          Object(n.useEffect)(() => {
            localStorage.getItem(d.LOGGED_USER) &&
              (r(JSON.parse(localStorage.getItem(d.LOGGED_USER))),
              localStorage.getItem(d.SELECTED_PROJECT) &&
                s(JSON.parse(localStorage.getItem(d.SELECTED_PROJECT))));
          }, []);
          return Object(j.jsx)(C.Provider, {
            value: {
              user: a,
              login: (e) => {
                if (
                  (localStorage.setItem(d.ACCESS_TOKEN, e.token),
                  localStorage.setItem(d.LOGGED_USER, JSON.stringify(e.user)),
                  r(e.user),
                  e.user.currentProject && "" !== e.user.currentProject)
                ) {
                  const t = e.user.projects.find(
                      (t) => t._id === e.user.currentProject
                    ),
                    a = { projectName: t.projectName, projectId: t._id };
                  s(a);
                }
                l.push({ pathname: "/app" });
              },
              logout: () => {
                localStorage.removeItem(d.ACCESS_TOKEN),
                  localStorage.removeItem(d.LOGGED_USER),
                  r({}),
                  s({ projectId: "", projectName: "" }),
                  l.push({ pathname: "/" });
              },
              updateUser: (e) => {
                try {
                  r(e);
                } catch (t) {
                  console.log(t);
                }
              },
              selectedProject: c,
              updateWorkingProjectContext: (e) => {
                const t = a.projects.find((t) => t.projectName === e),
                  n = { projectName: t.projectName, projectId: t._id };
                s(n);
              },
            },
            children: t,
          });
        };
      var w, S, N, T, P, E, I, D;
      const A = p.a.div(
          w ||
            (w = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n",
            ]))
        ),
        B = p.a.div(
          S ||
            (S = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  flex-grow: 1;\n",
            ]))
        ),
        q = p.a.div(
          N ||
            (N = Object(u.a)([
              '\n  margin: 40px auto;\n  font-family: "Segoe UI", sans-serif;\n  padding: 25px 28px;\n  border-radius: 4px;\n  border: 1px solid #302d2d;\n  display: flex;\n  flex-flow: column wrap;\n',
            ]))
        ),
        _ = p.a.p(
          T ||
            (T = Object(u.a)([
              "\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n  font-weight: 400;\n",
            ]))
        ),
        F = p.a.p(
          P ||
            (P = Object(u.a)([
              "\n  text-align: center;\n  > a {\n    color: #fc86aa;\n  }\n",
            ]))
        ),
        z = Object(p.a)(y.a)(
          E ||
            (E = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n  }\n",
            ]))
        ),
        M = p.a.div(
          I ||
            (I = Object(u.a)([
              "\n  flex-grow: 0;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n  padding: 5px;\n  width: 90%;\n",
            ]))
        ),
        H = p.a.div(
          D ||
            (D = Object(u.a)(["\n  display: block;\n  margin-bottom: 20px;\n"]))
        );
      var V = (e) => {
        let { submitUser: t } = e;
        const [a, r] = Object(n.useState)(!0),
          [c, s] = Object(n.useState)(null),
          [i, l] = Object(n.useState)(""),
          [b, u] = Object(n.useState)(""),
          { login: p } = Object(n.useContext)(C),
          x = localStorage.getItem(d.ACCESS_TOKEN);
        return x
          ? Object(j.jsx)(o.a, { to: "/app" })
          : Object(j.jsxs)(A, {
              children: [
                Object(j.jsx)("header", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsx)(_, { children: "Gordian Knot" }),
                }),
                Object(j.jsxs)(B, {
                  children: [
                    Object(j.jsxs)(q, {
                      children: [
                        Object(j.jsx)(_, {
                          children: a ? "Login" : "Registro",
                        }),
                        Object(j.jsxs)("form", {
                          children: [
                            Object(j.jsx)(H, {
                              children: Object(j.jsx)(z, {
                                placeholder: "Nombre de usuario",
                                variant: "outlined",
                                type: "text",
                                id: "username",
                                margin: "dense",
                                onChange: (e) => l(e.target.value),
                                value: i,
                              }),
                            }),
                            Object(j.jsx)(H, {
                              children: Object(j.jsx)(z, {
                                placeholder: "Contrase\xf1a",
                                type: "password",
                                variant: "outlined",
                                id: "password",
                                margin: "dense",
                                onChange: (e) => u(e.target.value),
                                value: b,
                              }),
                            }),
                          ],
                        }),
                        Object(j.jsx)(v.a, {
                          variant: "contained",
                          color: "primary",
                          onClick: a
                            ? (e) =>
                                (async (e, t, a) => {
                                  e.preventDefault();
                                  try {
                                    const e = await g(t, a);
                                    p(e);
                                  } catch (n) {
                                    s(n.message),
                                      setTimeout(() => {
                                        s(null);
                                      }, 2e3);
                                  }
                                })(e, i, b)
                            : (e) =>
                                (async (e, t, a) => {
                                  try {
                                    e.preventDefault();
                                    const n = await f(t, a);
                                    p(n);
                                  } catch (n) {
                                    s(n.message),
                                      setTimeout(() => {
                                        s(null);
                                      }, 4e3);
                                  }
                                })(e, i, b),
                          children: "Enviar",
                        }),
                        Object(j.jsxs)(F, {
                          children: [
                            "Quieres\xa0",
                            Object(j.jsx)(v.a, {
                              style: { color: "#FC86AA" },
                              onClick: () => r(!a),
                              children: a ? "te registrar" : "hacer login",
                            }),
                            "\xa0?",
                          ],
                        }),
                      ],
                    }),
                    c
                      ? Object(j.jsx)(M, {
                          children: Object(j.jsx)("p", { children: c }),
                        })
                      : Object(j.jsx)(M, { children: "\xa0" }),
                  ],
                }),
                Object(j.jsx)("footer", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsxs)(F, {
                    children: [
                      "Desarollado por",
                      " ",
                      Object(j.jsx)("a", {
                        href: "https://linkedin.com/in/joao-emmerich",
                        children: "Jo\xe3o Emmerich",
                      }),
                    ],
                  }),
                }),
              ],
            });
      };
      var R,
        G,
        L = a(138),
        U = a.n(L),
        Y = a(137),
        K = a.n(Y),
        J = a(238),
        W = a(236),
        Q = a(89),
        X = a(245),
        Z = a(231),
        $ = a(4),
        ee = a(234),
        te = a(54),
        ae = a(124),
        ne = a.n(ae);
      const re = p.a.div(
          R ||
            (R = Object(u.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  transition: background-color 1.2s ease;\n  background-color: ",
              ";\n",
            ])),
          (e) =>
            e.isDragDisabled
              ? "lightgrey"
              : e.isDragging
              ? "white"
              : "lightgrey"
        ),
        ce = p.a.div(G || (G = Object(u.a)(["\n  padding-left: 10px;\n"])));
      var se = (e) => {
        let { task: t, index: a, removeTask: n, card: r } = e;
        const c = "task-1" === t.id;
        return Object(j.jsx)(te.b, {
          draggableId: t.id,
          index: a,
          isDragDisabled: c,
          is: !0,
          children: (e, a) =>
            Object(j.jsxs)(re, {
              ...e.draggableProps,
              ...e.dragHandleProps,
              ref: e.innerRef,
              isDragging: a.isDragging,
              isDragDisabled: c,
              children: [
                Object(j.jsx)(ce, { children: t.content }),
                Object(j.jsx)(Z.a, {
                  onClick: () => n(t, r),
                  children: Object(j.jsx)(ne.a, {}),
                }),
              ],
            }),
        });
      };
      var oe = (e) => {
        let { handleContent: t, saveTask: a, newTaskContent: n, cardId: r } = e;
        return Object(j.jsx)("form", {
          onSubmit: (e) => a(e, r),
          children: Object(j.jsx)(y.a, {
            variant: "outlined",
            type: "text",
            value: n,
            onChange: t,
          }),
        });
      };
      var ie,
        le,
        de,
        je,
        be = (e) => {
          let {
            handleContent: t,
            saveTitle: a,
            newCardTitle: n,
            cardId: r,
          } = e;
          return Object(j.jsx)("form", {
            onSubmit: (e) => a(e, r),
            children: Object(j.jsx)(y.a, {
              variant: "outlined",
              type: "text",
              value: n,
              onChange: t,
            }),
          });
        },
        ue = a(125),
        pe = a.n(ue);
      const xe = p.a.div(
          ie ||
            (ie = Object(u.a)([
              "\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 250px;\n  display: flex;\n  flex-direction: column;\n  background-color: #efefef;\n",
            ]))
        ),
        Oe = p.a.div(
          le ||
            (le = Object(u.a)([
              "\n  padding: 8px;\n  transition: background-color 0.5s ease;\n  background-color: ",
              ";\n  flex-grow: 1;\n  min-height: 100px;\n",
            ])),
          (e) => (e.isDraggingOver ? "#F1769A" : "inherit")
        ),
        he = p.a.h3(
          de ||
            (de = Object(u.a)(["\n  padding: 8px;\n  text-align: center;\n"]))
        ),
        me = p.a.div(
          je ||
            (je = Object(u.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        );
      var ge = (e) => {
          let {
            card: t,
            tasks: a,
            index: n,
            addTask: r,
            isInsertingTask: c,
            handleTaskChange: s,
            handleTaskSubmit: o,
            newTaskContent: i,
            isNewCard: l,
            newCardTitle: d,
            handleCardTitleChange: b,
            handleCardTitleSubmit: u,
            removeTask: p,
            removeCard: x,
          } = e;
          const O = !0 === l;
          return Object(j.jsx)(te.b, {
            draggableId: t.id,
            index: n,
            isDragDisabled: O,
            children: (e) =>
              Object(j.jsxs)(xe, {
                ...e.draggableProps,
                ref: e.innerRef,
                children: [
                  Object(j.jsxs)(me, {
                    children: [
                      Object(j.jsx)(he, {
                        ...e.dragHandleProps,
                        children: l
                          ? Object(j.jsx)(be, {
                              newCardTitle: d,
                              handleContent: b,
                              saveTitle: u,
                              cardId: t.id,
                            })
                          : t.title,
                      }),
                      Object(j.jsx)(Z.a, {
                        onClick: () => x(t),
                        children: Object(j.jsx)(pe.a, { fontSize: "small" }),
                      }),
                    ],
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(te.c, {
                    droppableId: t.id,
                    type: "task",
                    children: (e, n) =>
                      Object(j.jsxs)(Oe, {
                        isDraggingOver: n.isDraggingOver,
                        ref: e.innerRef,
                        ...e.droppableProps,
                        children: [
                          a.map((e, a) =>
                            Object(j.jsx)(
                              se,
                              { task: e, index: a, removeTask: p, card: t },
                              e.id
                            )
                          ),
                          e.placeholder,
                        ],
                      }),
                  }),
                  c
                    ? Object(j.jsx)(oe, {
                        newTaskContent: i,
                        handleContent: s,
                        saveTask: o,
                        cardId: t.id,
                      })
                    : l
                    ? null
                    : Object(j.jsx)(v.a, {
                        variant: "contained",
                        color: "primary",
                        onClick: r,
                        children: "A\xf1adir tarea",
                      }),
                ],
              }),
          });
        },
        fe = a(242);
      const ve = {
        name: "first-project",
        tasks: [],
        cards: [
          {
            name: "",
            id: Object(fe.a)(),
            title: "New Title",
            isNewCard: !0,
            isInsertingTask: !1,
            taskIds: [],
          },
        ],
        cardOrder: [],
        initialData: !0,
      };
      ve.cardOrder = [ve.cards[0].id];
      var ye = ve,
        Ce = a(228),
        ke = a(195),
        we = a(232),
        Se = a(126),
        Ne = a.n(Se),
        Te = a(127),
        Pe = a.n(Te);
      const Ee = {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          overflow: "hidden",
        },
        Ie = { width: "50px" };
      var De = (e) => {
        let { addCard: t, saveToDatabase: a, isSaved: n } = e;
        return Object(j.jsxs)(Ce.a, {
          style: Ee,
          children: [
            Object(j.jsx)(ke.a, {
              style: Ie,
              onClick: t,
              button: !0,
              children: Object(j.jsx)(we.a, {
                children: Object(j.jsx)(Ne.a, { fontSize: "medium" }),
              }),
            }),
            Object(j.jsx)(ke.a, {
              style: Ie,
              onClick: a,
              button: !0,
              children: Object(j.jsx)(we.a, {
                children: Object(j.jsx)(Pe.a, {
                  fontSize: "medium",
                  color: n ? "disabled" : "action",
                }),
              }),
            }),
          ],
        });
      };
      const Ae = (e, t, a, n) => {
          const r = Array.from(e.cardOrder);
          r.splice(t.index, 1), r.splice(a.index, 0, n);
          return { ...e, cardOrder: r };
        },
        Be = (e, t, a, n) => {
          const r = e.cards.find((e) => e.id === t.droppableId),
            c = e.cards.findIndex((e) => e.id === t.droppableId),
            s = e.cards.find((e) => e.id === a.droppableId),
            o = e.cards.findIndex((e) => e.id === a.droppableId);
          if (r === s) {
            const s = Array.from(r.taskIds);
            s.splice(t.index, 1), s.splice(a.index, 0, n);
            const o = { ...r, taskIds: s },
              i = { ...e, cards: [...e.cards] };
            return (i.cards[c] = o), i;
          }
          {
            const i = Array.from(r.taskIds),
              l = Array.from(s.taskIds);
            i.splice(t.index, 1), l.splice(a.index, 0, n);
            const d = { ...r, taskIds: i },
              j = { ...s, taskIds: l },
              b = { ...e, cards: [...e.cards] };
            return (b.cards[c] = d), (b.cards[o] = j), b;
          }
        },
        qe = "https://gordianknot.xyz/api",
        _e = "dashboard";
      var Fe,
        ze,
        Me,
        He = async (e, t) => {
          try {
            return (
              await O.a.post("".concat(qe, "/").concat(_e), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (a) {
            console.log("Error sending data");
          }
        },
        Ve = async (e) => {
          try {
            return (
              await O.a.get("".concat(qe, "/").concat(_e), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        };
      const Re = p.a.section(
          Fe ||
            (Fe = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Ge = p.a.div(
          ze ||
            (ze = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n",
            ]))
        ),
        Le = p.a.div(
          Me ||
            (Me = Object(u.a)([
              "\n  border: 1px solid #fc86aa;\n  margin: 20px;\n",
            ]))
        );
      var Ue,
        Ye = (e) => {
          let { token: t } = e;
          const [a, r] = Object(n.useState)(!0),
            [c, s] = Object(n.useState)(ye),
            [o, i] = Object(n.useState)(!1),
            [l, d] = Object(n.useState)(!1),
            [b, u] = Object(n.useState)(""),
            [p, x] = Object(n.useState)("New Card");
          Object(n.useEffect)(() => {
            const e = ((e) => !0 === e.initialData)(c);
            e && d(!0);
          }, []),
            Object(n.useEffect)(() => {
              if (!0 === c.initialData) {
                async function e() {
                  const e = await Ve(t);
                  e && e.length > 0 && (s(e[0]), d(!1));
                }
                e();
              }
            }, []),
            Object(n.useEffect)(() => {
              r(!1);
            }, [c]);
          const O = (e, t) => {
              let a = Array.from(c.tasks);
              a = a.filter((t) => t.id !== e.id);
              let n = Array.from(c.cards),
                r = n.find((e) => e.id === t.id);
              (r.taskIds = r.taskIds.filter((t) => t !== e.id)),
                (n = n.map((e) => (e.id === r.id ? r : e)));
              const o = { ...c };
              (o.tasks = a), (o.cards = n), s(o);
            },
            h = (e) => {
              let t = [...c.cardOrder],
                a = [...c.cards],
                n = [...c.tasks];
              (n = n.filter((t) => !e.taskIds.some((e) => t.id === e))),
                (t = t.filter((t) => t !== e.id)),
                (a = a.filter((t) => t.id !== e.id));
              const r = { ...c };
              (r.tasks = n), (r.cardOrder = t), (r.cards = a), s(r);
            },
            m = (e) => {
              u(e.target.value);
            },
            g = (e) => {
              x(e.target.value);
            },
            f = (e, t) => {
              e.preventDefault();
              const a = c.cards.find((e) => e.id === t),
                n = c.cards.findIndex((e) => e.id === t),
                r = { id: Object(fe.a)(), content: b };
              a.taskIds.push(r.id), (a.isInsertingTask = !1);
              const l = { ...c };
              l.tasks.push(r),
                (l.cards[n] = a),
                (l.initialData = !1),
                s(l),
                u(""),
                i(!o);
            },
            v = (e, t) => {
              e.preventDefault();
              const a = c.cards.find((e) => e.id === t),
                n = c.cards.findIndex((e) => e.id === t);
              (a.title = p), (a.isNewCard = !1);
              const r = { ...c, tasks: [...c.tasks], cards: [...c.cards] };
              (r.cards[n] = a),
                (r.initialData = !1),
                s(r),
                d(!1),
                x("New Card");
            };
          return Object(j.jsxs)(Re, {
            className: "board",
            children: [
              Object(j.jsx)(Le, {
                children: Object(j.jsx)(De, {
                  addCard: () => {
                    if (!l) {
                      d(!l);
                      const e = {
                          name: "",
                          id: Object(fe.a)(),
                          title: p,
                          isNewCard: !0,
                          isInsertingTask: !1,
                          taskIds: [],
                        },
                        t = [...c.cardOrder, e.id],
                        a = { ...c, cards: [...c.cards], cardOrder: t };
                      a.cards.push(e), s(a);
                    }
                  },
                  isSaved: a,
                  saveToDatabase: async () => {
                    const e = await He(t, c);
                    s(e), r(!0);
                  },
                }),
              }),
              Object(j.jsx)(te.a, {
                onDragEnd: (e) => {
                  const t = ((e, t) => {
                    const {
                      destination: a,
                      source: n,
                      draggableId: r,
                      type: c,
                    } = e;
                    if (
                      a &&
                      (a.droppableId !== n.droppableId || a.index !== n.index)
                    ) {
                      if ("card" === c) return Ae(t, n, a, r);
                      if ("task" === c) return Be(t, n, a, r);
                    }
                  })(e, c);
                  t && s(t);
                },
                children: Object(j.jsx)(te.c, {
                  type: "card",
                  droppableId: "all-cards",
                  direction: "horizontal",
                  children: (e) => {
                    var t;
                    return Object(j.jsxs)(Ge, {
                      ...e.droppableProps,
                      ref: e.innerRef,
                      children: [
                        null === (t = c.cardOrder) || void 0 === t
                          ? void 0
                          : t.map((e, t) => {
                              const a = c.cards.find((t) => t.id === e);
                              let n = [];
                              return (
                                c.tasks.length > 0 &&
                                  (n = a.taskIds.map((e) =>
                                    c.tasks.find((t) => t.id === e)
                                  )),
                                Object(j.jsx)(
                                  ge,
                                  {
                                    newCardTitle: p,
                                    card: a,
                                    tasks: n,
                                    index: t,
                                    addTask: () =>
                                      ((e) => {
                                        if (!o) {
                                          i(!o);
                                          const t = {
                                              ...e,
                                              isInsertingTask: !0,
                                            },
                                            a = { ...c, cards: [...c.cards] },
                                            n = a.cards.findIndex(
                                              (e) => e.id === t.id
                                            );
                                          (a.cards[n] = t), s(a);
                                        }
                                      })(a),
                                    isNewCard: a.isNewCard,
                                    isInsertingTask: a.isInsertingTask,
                                    handleTaskChange: m,
                                    handleTaskSubmit: f,
                                    newTaskContent: b,
                                    handleCardTitleChange: g,
                                    handleCardTitleSubmit: v,
                                    removeTask: O,
                                    removeCard: h,
                                  },
                                  a.id
                                )
                              );
                            }),
                        e.placeholder,
                      ],
                    });
                  },
                }),
              }),
            ],
          });
        },
        Ke = a(56),
        Je = a(233),
        We = a(128),
        Qe = a.n(We),
        Xe = a(129),
        Ze = a.n(Xe),
        $e = a(131),
        et = a.n($e),
        tt = a(130),
        at = a.n(tt),
        nt = a(132),
        rt = a.n(nt),
        ct = a(133),
        st = a.n(ct);
      const ot = p.a.div(Ue || (Ue = Object(u.a)(["\n  overflow: hidden;\n"])));
      function it(e) {
        const { icon: t, primary: a, to: n } = e,
          c = r.a.useMemo(
            () =>
              r.a.forwardRef((e, t) =>
                Object(j.jsx)(Ke.a, {
                  activeClassName: "active-nav-link",
                  to: n,
                  ...e,
                })
              ),
            [n]
          );
        return Object(j.jsx)("li", {
          children: Object(j.jsxs)(ke.a, {
            button: !0,
            component: c,
            children: [
              t ? Object(j.jsx)(we.a, { children: t }) : null,
              Object(j.jsx)(Je.a, { primary: a }),
            ],
          }),
        });
      }
      var lt = function () {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)(Ce.a, {
              component: ot,
              children: [
                Object(j.jsx)(it, {
                  to: "/app",
                  primary: "Home",
                  icon: Object(j.jsx)(Qe.a, { color: "primary" }),
                }),
                Object(j.jsx)(it, {
                  to: "/app/board",
                  primary: "Cuadro de Notas",
                  icon: Object(j.jsx)(Ze.a, { color: "primary" }),
                }),
                Object(j.jsx)(it, {
                  to: "/app/pdf",
                  primary: "Facturas",
                  icon: Object(j.jsx)(at.a, { color: "primary" }),
                }),
                Object(j.jsx)(it, {
                  to: "/app/customer",
                  primary: "Clientes",
                  icon: Object(j.jsx)(et.a, { color: "primary" }),
                }),
                Object(j.jsx)(it, {
                  to: "/app/bugtracker",
                  primary: "Bug Tracker",
                  icon: Object(j.jsx)(rt.a, { color: "error" }),
                }),
                Object(j.jsx)(it, {
                  to: "/app/ajustes",
                  primary: "Ajustes",
                  icon: Object(j.jsx)(st.a, { color: "primary" }),
                }),
              ],
            }),
          });
        },
        dt = a(241);
      var jt = (e, t) => {
        const a = window.URL.createObjectURL(new Blob([e.data])),
          n = document.createElement("a");
        (n.href = a),
          n.setAttribute("download", "".concat(t, ".pdf")),
          document.body.appendChild(n),
          n.click();
      };
      const bt = "https://gordianknot.xyz/api";
      var ut,
        pt,
        xt,
        Ot,
        ht,
        mt,
        gt,
        ft = async (e) => {
          try {
            return (
              await O.a.get("".concat(bt, "/pdf"), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        },
        vt = async (e, t) => {
          try {
            await O.a.post("".concat(bt, "/pdf"), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        yt = async (e, t) => {
          try {
            await O.a.put("".concat(bt, "/pdf/").concat(t._id), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        Ct = async (e, t) => {
          try {
            await O.a.delete("".concat(bt, "/pdf/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        kt = async (e, t) => {
          try {
            const a = await O.a.get("".concat(bt, "/pdf/download/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
              responseType: "blob",
            });
            jt(a, t);
          } catch (a) {
            console.log(a);
          }
        },
        wt = a(14),
        St = a(24),
        Nt = a.n(St),
        Tt = a(134),
        Pt = a.n(Tt),
        Et = a(135),
        It = a(239),
        Dt = a(25);
      Nt.a.extend(Pt.a);
      const At = p.a.div(
          ut ||
            (ut = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        Bt = p.a.form(
          pt ||
            (pt = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"] {\n    background-color: #f3f3f3;\n    border: none;\n  }\n',
            ]))
        ),
        qt = p.a.div(xt || (xt = Object(u.a)(["\n  align-self: center;\n"]))),
        _t = p.a.div(
          Ot ||
            (Ot = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  & fieldset {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-around;\n  }\n  & div {\n    display: flex;\n    margin: 5px 10px 5px 10px;\n    flex-grow: 1;\n  }\n",
            ]))
        ),
        Ft = Object(p.a)(v.a)(
          ht || (ht = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        zt = Object(p.a)(y.a)(
          mt ||
            (mt = Object(u.a)([
              "\n  margin: 0px 20px;\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Mt = Object(p.a)(It.a)(
          gt || (gt = Object(u.a)(["\n  & input {\n    padding: 20px;\n  }\n"]))
        );
      var Ht,
        Vt,
        Rt,
        Gt,
        Lt = (e) => {
          let { onSubmit: t, isEditing: a, invoice: r, closeModal: c } = e;
          const [s, o] = Object(n.useState)(null),
            {
              control: i,
              handleSubmit: l,
              reset: d,
              setValue: b,
            } = Object(wt.c)({ defaultValues: {} }),
            {
              fields: u,
              append: p,
              remove: x,
              replace: O,
            } = Object(wt.b)({ control: i, name: "articles" });
          Object(n.useEffect)(() => {
            a &&
              (d(
                {
                  clientName: r.clientName,
                  invoiceNumber: r.invoiceNumber,
                  invoiceDate: r.invoiceDate,
                  orderNumber: r.orderNumber || "",
                  invoiceTotal: r.invoiceTotal,
                  invoiceSubTotal: r.invoiceSubTotal,
                  invoiceTax: r.invoiceTax,
                  _id: r._id,
                  projectId: r.projectId,
                  __v: r.__v,
                },
                { keepDefaultValues: !0 }
              ),
              O(r.articles)),
              o(r.invoiceDate);
          }, []);
          return Object(j.jsx)("div", {
            children: Object(j.jsxs)(Bt, {
              onSubmit: l(t),
              children: [
                Object(j.jsx)(qt, {
                  children: Object(j.jsxs)("h2", {
                    children: [
                      "Factura n# ",
                      Object(j.jsx)("span", { children: r.invoiceNumber }),
                    ],
                  }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsxs)(_t, {
                  children: [
                    Object(j.jsxs)("fieldset", {
                      children: [
                        Object(j.jsx)(wt.a, {
                          name: "clientName",
                          control: i,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(zt, {
                              label: "Nombre del cliente",
                              variant: "outlined",
                              margin: "none",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(wt.a, {
                          name: "invoiceNumber",
                          control: i,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(zt, {
                              label: "Numero de la factura",
                              variant: "outlined",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(wt.a, {
                          name: "orderNumber",
                          control: i,
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(zt, {
                              ...t,
                              label: "N\xfamero del pedido",
                              variant: "outlined",
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                      ],
                    }),
                    Object(j.jsx)("hr", {}),
                    Object(j.jsx)("div", {
                      children: Object(j.jsx)(Dt.a, {
                        utils: Et.a,
                        children: Object(j.jsx)(Mt, {
                          autoOk: !0,
                          inputVariant: "standard",
                          variant: "inline",
                          format: "DD/MM/YYYY",
                          margin: "normal",
                          id: "date-picker-inline",
                          placeholder: "Fecha de la Factura",
                          value: s || Nt.a.utc(),
                          onChange: (e) =>
                            ((e) => {
                              Nt()(e).isValid() &&
                                (Nt()(e).utc(!0).format(), o(e));
                            })(e),
                          KeyboardButtonProps: { "aria-label": "change date" },
                          name: "invoiceDate",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(j.jsx)(qt, {
                  children: Object(j.jsx)("h2", { children: "Itens " }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)("section", {
                  children: u.map((e, t) =>
                    Object(j.jsxs)(
                      At,
                      {
                        children: [
                          Object(j.jsx)(wt.a, {
                            name: "articles[".concat(t, "].articleName"),
                            control: i,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(zt, {
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Art\xedculo",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(wt.a, {
                            name: "articles[".concat(t, "].pricePerUnit"),
                            control: i,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(zt, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Precio por unidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(wt.a, {
                            name: "articles[".concat(t, "].quantity"),
                            control: i,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(zt, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Cuantidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(wt.a, {
                            name: "articles[".concat(t, "].vat"),
                            control: i,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(zt, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "IVA",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(wt.a, {
                            name: "articles[".concat(t, "].totalPrice"),
                            control: i,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(zt, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Precio Total",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(v.a, {
                            variant: "contained",
                            color: "secondary",
                            onClick: () => x(t),
                            children: "Eliminar art\xedculo",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                Object(j.jsx)(v.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => {
                    console.log("click"),
                      p({
                        articleName: "",
                        pricePerUnit: 0,
                        quantity: 0,
                        vat: 21,
                        totalPrice: 0,
                      });
                  },
                  children: "A\xf1adir Art\xedculo",
                }),
                Object(j.jsx)(qt, {
                  children: Object(j.jsx)("h2", { children: "Total" }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)(wt.a, {
                  name: "invoiceTotal",
                  control: i,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(zt, {
                      type: "number",
                      label: "Total Factura",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(wt.a, {
                  name: "invoiceSubTotal",
                  control: i,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(zt, {
                      type: "number",
                      label: "Base Imponible",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(wt.a, {
                  name: "invoiceTax",
                  control: i,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(zt, {
                      type: "number",
                      label: "Importe del IVA",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)(Ft, {
                  variant: "contained",
                  color: "primary",
                  type: "submit",
                  children: "Guardar Factura",
                }),
                Object(j.jsx)(Ft, {
                  variant: "contained",
                  color: "secondary",
                  onClick: c,
                  children: "Cancelar",
                }),
              ],
            }),
          });
        },
        Ut = a(29),
        Yt = a(52),
        Kt = a.n(Yt),
        Jt = a(96),
        Wt = a.n(Jt),
        Qt = a(63),
        Xt = a.n(Qt),
        Zt = a(69),
        $t = a.n(Zt),
        ea = a(66),
        ta = a.n(ea),
        aa = a(68),
        na = a.n(aa),
        ra = a(67),
        ca = a.n(ra),
        sa = a(240),
        oa = a(237),
        ia = a(65),
        la = a.n(ia),
        da = a(64),
        ja = a.n(da);
      Nt.a.extend(Kt.a);
      const ba = p.a.table(
          Ht ||
            (Ht = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        ua = p.a.thead(
          Vt ||
            (Vt = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        pa = p.a.div(
          Rt ||
            (Rt = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    padding-left: 10px;\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        xa = p.a.div(Gt || (Gt = Object(u.a)(["\n  width: 100%;\n"])));
      var Oa,
        ha,
        ma,
        ga = (e) => {
          let { data: t, handleClick: a, saveToPdf: r, deleteInvoice: c } = e;
          const [s, o] = Object(n.useState)(""),
            i = (e) => {
              Nt()(e).format("DD-MM-YYYY");
              return e;
            },
            l = Object(n.useMemo)(
              () => [
                { Header: "Nombre", accessor: "clientName", sortBy: "string" },
                {
                  Header: "Fecha",
                  accessor: (e) => e.invoiceDate,
                  sortBy: "datetime",
                  Cell: (e) =>
                    Object(j.jsx)(j.Fragment, { children: i(e.cell.value) }),
                },
                { Header: "Numero de Factura", accessor: "invoiceNumber" },
                { Header: "Total", accessor: "invoiceTotal", sortBy: "basic" },
                {
                  Header: "Download",
                  accessor: "_id",
                  Cell: (e) =>
                    Object(j.jsx)(Wt.a, {
                      className: "save-to-pdf",
                      onClick: () => r(e.cell.value),
                      children: "PDF",
                    }),
                },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(Xt.a, {
                      className: "delete",
                      onClick: () => c(e.cell.row.original._id),
                      children: "PDF",
                    }),
                },
              ],
              [r]
            ),
            {
              getTableProps: d,
              getTableBodyProps: b,
              headerGroups: u,
              page: p,
              prepareRow: x,
              setFilter: O,
              canPreviousPage: h,
              canNextPage: m,
              pageOptions: g,
              pageCount: f,
              gotoPage: v,
              nextPage: y,
              previousPage: C,
              setPageSize: k,
              state: { pageIndex: w, pageSize: S },
            } = Object(Ut.useTable)(
              { columns: l, data: t },
              Ut.useFilters,
              Ut.useSortBy,
              Ut.usePagination
            );
          return Object(j.jsxs)(pa, {
            children: [
              Object(j.jsx)("input", {
                value: s,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  O("clientName", t), o(t);
                },
                placeholder: "Buscar por nombre",
              }),
              Object(j.jsxs)(ba, {
                ...d(),
                children: [
                  Object(j.jsx)(ua, {
                    children: u.map((e) =>
                      Object(j.jsx)("tr", {
                        ...e.getHeaderGroupProps(),
                        children: e.headers.map((e) =>
                          Object(j.jsx)("th", {
                            ...e.getHeaderProps(e.getSortByToggleProps()),
                            children: Object(j.jsxs)("div", {
                              children: [
                                e.render("Header"),
                                Object(j.jsx)("span", {
                                  children: e.isSorted
                                    ? e.isSortedDesc
                                      ? Object(j.jsx)(ja.a, {})
                                      : Object(j.jsx)(la.a, {})
                                    : "",
                                }),
                              ],
                            }),
                          })
                        ),
                      })
                    ),
                  }),
                  Object(j.jsx)("tbody", {
                    className: "rt-tbody",
                    ...b(),
                    children: p.map(
                      (e) => (
                        x(e),
                        Object(j.jsx)(
                          "tr",
                          {
                            children: e.cells.map((e) =>
                              "Download" !== e.column.Header &&
                              "Delete" !== e.column.Header
                                ? Object(j.jsx)("td", {
                                    className: "react-td",
                                    ...e.getCellProps(),
                                    onMouseEnter: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "#F1769A";
                                    },
                                    onMouseLeave: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "inherit";
                                    },
                                    onClick: () => {
                                      a(e.row.original);
                                    },
                                    children: e.render("Cell"),
                                  })
                                : Object(j.jsx)("td", {
                                    ...e.getCellProps(),
                                    children: e.render("Cell"),
                                  })
                            ),
                          },
                          e.original._id
                        )
                      )
                    ),
                  }),
                ],
              }),
              Object(j.jsxs)(xa, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => v(0),
                    disabled: !h,
                    children: Object(j.jsx)(ta.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => C(),
                    disabled: !h,
                    children: Object(j.jsx)(ca.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => y(),
                    disabled: !m,
                    children: Object(j.jsx)(na.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => v(f - 1),
                    disabled: !m,
                    children: Object(j.jsx)($t.a, {}),
                  }),
                  " ",
                  Object(j.jsxs)("span", {
                    children: [
                      "P\xe1gina",
                      Object(j.jsxs)("strong", {
                        children: [w + 1, " de ", g.length],
                      }),
                      " ",
                    ],
                  }),
                  Object(j.jsxs)("span", {
                    children: [
                      "| Ir a la p\xe1gina:",
                      " ",
                      Object(j.jsx)("input", {
                        type: "number",
                        defaultValue: w + 1,
                        onChange: (e) => {
                          const t = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          v(t);
                        },
                        style: { width: "100px" },
                      }),
                    ],
                  }),
                  " ",
                  Object(j.jsx)(sa.a, {
                    value: S,
                    onChange: (e) => {
                      k(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsx)(oa.a, { value: e, children: e }, e)
                    ),
                  }),
                ],
              }),
            ],
          });
        };
      const fa = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let va = {
        invoiceNumber: "",
        invoiceDate: "",
        orderNumber: "",
        invoiceTotal: "",
        invoiceSubTotal: "",
        invoiceTax: "",
        clientName: "",
        articles: "",
      };
      const ya = p.a.section(
          Oa || (Oa = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        Ca = p.a.div(
          ha ||
            (ha = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        ka = p.a.section(
          ma ||
            (ma = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var wa = (e) => {
        let { token: t } = e;
        const [a, r] = Object(n.useState)(va),
          [c, s] = Object(n.useState)(!1),
          [o, i] = Object(n.useState)([]),
          [l, d] = Object(n.useState)(!1),
          [b, u] = Object(n.useState)(!1);
        Object(n.useEffect)(() => {
          !(async function () {
            const e = await ft(t);
            i(e);
          })();
        }, [c]);
        const p = () => {
          u(!1), d(!1), r(va);
        };
        return Object(j.jsx)(ya, {
          children: Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)(Ca, {
                children: Object(j.jsx)(v.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => u(!0),
                  children: "Nueva Factura",
                }),
              }),
              Object(j.jsx)(ka, {
                children: o
                  ? Object(j.jsx)(ga, {
                      data: o,
                      handleClick: (e) => {
                        r(e), d(!0), u(!0);
                      },
                      saveToPdf: async (e) => {
                        window.confirm("do you want to save it?")
                          ? await kt(t, e)
                          : console.log("so bad!");
                      },
                      deleteInvoice: async (e) => {
                        window.confirm("Do you really want to delete the file?")
                          ? (await Ct(t, e), s(!c), p())
                          : console.log("so bad!");
                      },
                    })
                  : null,
              }),
              Object(j.jsx)(dt.a, {
                open: b,
                onClose: () => p(),
                children: Object(j.jsx)("div", {
                  style: fa,
                  children: Object(j.jsx)(Lt, {
                    onSubmit: l
                      ? async (e, a) => {
                          a.preventDefault(), await yt(t, e), s(!c), p();
                        }
                      : async (e, a) => {
                          a.preventDefault(), await vt(t, e), s(!c), p();
                        },
                    isEditing: l,
                    invoice: a,
                    closeModal: () => p(),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      const Sa = "https://gordianknot.xyz/api";
      var Na,
        Ta,
        Pa,
        Ea,
        Ia = {
          getCustomers: async (e) => {
            try {
              return (
                await O.a.get("".concat(Sa, "/customer"), {
                  headers: { Authorization: "Bearer: ".concat(e) },
                })
              ).data;
            } catch (t) {
              console.log(t);
            }
          },
          saveCustomer: async (e, t) => {
            try {
              return (
                await O.a.post("".concat(Sa, "/customer"), t, {
                  headers: { Authorization: "Bearer: ".concat(e) },
                })
              ).data;
            } catch (a) {
              console.log("Error sending data"), console.log(a);
            }
          },
          editCustomer: async (e, t) => {
            try {
              await O.a.put("".concat(Sa, "/customer/").concat(t._id), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
          deleteCustomer: async (e, t) => {
            try {
              await O.a.delete("".concat(Sa, "/customer/").concat(t), {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
        };
      Nt.a.extend(Kt.a);
      const Da = p.a.table(
          Na ||
            (Na = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        Aa = p.a.thead(
          Ta ||
            (Ta = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        Ba = p.a.div(
          Pa ||
            (Pa = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        qa = p.a.div(Ea || (Ea = Object(u.a)([""])));
      var _a,
        Fa,
        za,
        Ma,
        Ha,
        Va,
        Ra = (e) => {
          let { data: t, handleClick: a, deleteCustomer: r } = e;
          const [c, s] = Object(n.useState)(""),
            o = Object(n.useMemo)(
              () => [
                { Header: "Nombre", accessor: "name", sortBy: "string" },
                { Header: "Contrato", accessor: "estadoContrato" },
                { Header: "Modelo Contrato", accessor: "modeloContrato" },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(Xt.a, {
                      className: "delete",
                      onClick: () => r(e.cell.row.original._id),
                      children: "PDF",
                    }),
                },
              ],
              []
            ),
            {
              getTableProps: i,
              getTableBodyProps: l,
              headerGroups: d,
              page: b,
              prepareRow: u,
              setFilter: p,
              canPreviousPage: x,
              canNextPage: O,
              pageOptions: h,
              pageCount: m,
              gotoPage: g,
              nextPage: f,
              previousPage: v,
              setPageSize: y,
              state: { pageIndex: C, pageSize: k },
            } = Object(Ut.useTable)(
              { columns: o, data: t },
              Ut.useFilters,
              Ut.useSortBy,
              Ut.usePagination
            );
          return Object(j.jsxs)(Ba, {
            children: [
              Object(j.jsx)("input", {
                value: c,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  p("name", t), s(t);
                },
                placeholder: "Buscar por nome",
              }),
              Object(j.jsxs)(Da, {
                className: "-highlight",
                ...i(),
                children: [
                  Object(j.jsx)(Aa, {
                    children: d.map((e) =>
                      Object(j.jsx)("tr", {
                        ...e.getHeaderGroupProps(),
                        children: e.headers.map((e) =>
                          Object(j.jsx)("th", {
                            ...e.getHeaderProps(e.getSortByToggleProps()),
                            children: Object(j.jsxs)("div", {
                              children: [
                                e.render("Header"),
                                Object(j.jsx)("span", {
                                  children: e.isSorted
                                    ? e.isSortedDesc
                                      ? Object(j.jsx)(ja.a, {})
                                      : Object(j.jsx)(la.a, {})
                                    : "",
                                }),
                              ],
                            }),
                          })
                        ),
                      })
                    ),
                  }),
                  Object(j.jsx)("tbody", {
                    className: "rt-tbody",
                    ...l(),
                    children: b.map(
                      (e) => (
                        u(e),
                        Object(j.jsx)(
                          "tr",
                          {
                            children: e.cells.map((e) =>
                              "Download" !== e.column.Header &&
                              "Delete" !== e.column.Header
                                ? Object(j.jsx)("td", {
                                    className: "react-td",
                                    ...e.getCellProps(),
                                    onMouseEnter: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "#F1769A";
                                    },
                                    onMouseLeave: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "inherit";
                                    },
                                    onClick: () => {
                                      a(e.row.original);
                                    },
                                    children: e.render("Cell"),
                                  })
                                : Object(j.jsx)("td", {
                                    ...e.getCellProps(),
                                    children: e.render("Cell"),
                                  })
                            ),
                          },
                          e.original._id
                        )
                      )
                    ),
                  }),
                ],
              }),
              Object(j.jsxs)(qa, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => g(0),
                    disabled: !x,
                    children: Object(j.jsx)(ta.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => v(),
                    disabled: !x,
                    children: Object(j.jsx)(ca.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(),
                    disabled: !O,
                    children: Object(j.jsx)(na.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => g(m - 1),
                    disabled: !O,
                    children: Object(j.jsx)($t.a, {}),
                  }),
                  " ",
                  Object(j.jsxs)("span", {
                    children: [
                      "P\xe1gina",
                      Object(j.jsxs)("strong", {
                        children: [C + 1, " de ", h.length],
                      }),
                      " ",
                    ],
                  }),
                  Object(j.jsxs)("span", {
                    children: [
                      "| Ir a p\xe1gina:",
                      " ",
                      Object(j.jsx)("input", {
                        type: "number",
                        defaultValue: C + 1,
                        onChange: (e) => {
                          const t = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          g(t);
                        },
                        style: { width: "100px" },
                      }),
                    ],
                  }),
                  " ",
                  Object(j.jsx)(sa.a, {
                    value: k,
                    onChange: (e) => {
                      y(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsxs)(
                        oa.a,
                        { value: e, children: ["Mostrar ", e] },
                        e
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        Ga = a(227),
        La = a(229);
      const Ua = p.a.div(
          _a ||
            (_a = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        Ya = p.a.form(
          Fa ||
            (Fa = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"],\n  select,\n  option {\n    background-color: #f3f3f3;\n    border: none;\n    margin: 10px;\n  }\n  & select,\n  option {\n    padding: 10px;\n  }\n',
            ]))
        ),
        Ka = p.a.div(za || (za = Object(u.a)(["\n  align-self: center;\n"]))),
        Ja = Object(p.a)(v.a)(
          Ma || (Ma = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        Wa = Object(p.a)(y.a)(
          Ha ||
            (Ha = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Qa = Object(p.a)(sa.a)(
          Va ||
            (Va = Object(u.a)([
              "\n  background-color: #f3f3f3;\n  margin: 10px;\n  & input {\n    background-color: #f3f3f3;\n  }\n",
            ]))
        );
      var Xa,
        Za,
        $a,
        en = (e) => {
          let {
            submitCRMForm: t,
            isEditing: a,
            customer: r,
            closeModal: c,
          } = e;
          const [s, o] = Object(n.useState)("default"),
            {
              control: i,
              handleSubmit: l,
              reset: d,
              setValue: b,
            } = Object(wt.c)({ defaultValues: {} }),
            {
              fields: u,
              append: p,
              remove: x,
              replace: O,
            } = Object(wt.b)({ control: i, name: "pets" });
          return (
            Object(n.useEffect)(() => {
              a &&
                (d(
                  {
                    name: r.name,
                    modeloContrato: r.modeloContrato,
                    estadoContrato: r.estadoContrato,
                    _id: r._id,
                    projectId: r.projectId,
                    __v: r.__v,
                  },
                  { keepDefaultValues: !0 }
                ),
                O(r.pets));
            }, []),
            Object(j.jsx)("div", {
              children: Object(j.jsxs)(Ya, {
                onSubmit: l(t),
                children: [
                  Object(j.jsx)(Ka, {
                    children: Object(j.jsx)("h2", {
                      children: " Detalles del Cliente",
                    }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(wt.a, {
                    name: "name",
                    control: i,
                    rules: { required: "Campo requerido" },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsx)(Wa, {
                        helperText: a ? a.message : null,
                        error: !!a,
                        ...t,
                        variant: "outlined",
                        label: "Nombre del Cliente",
                      });
                    },
                  }),
                  Object(j.jsx)(wt.a, {
                    name: "modeloContrato",
                    defaultValue: s,
                    control: i,
                    rules: {
                      required: "Campo requerido",
                      validate: (e) =>
                        "default" !== e || "Tienes que elegir algo",
                    },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsxs)(Ga.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Qa, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsx)(oa.a, {
                                value: s,
                                disabled: !0,
                                children: "Modelo Contrato",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "12 IVA Inclu\xeddo",
                                children: "12",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "12 + IVA",
                                children: "12 + IVA",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "20 IVA inclu\xeddo",
                                children: "20 IVA incluido",
                              }),
                            ],
                          }),
                          Object(j.jsx)(La.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(wt.a, {
                    name: "estadoContrato",
                    defaultValue: s,
                    control: i,
                    rules: {
                      required: "Campo requerido",
                      validate: (e) =>
                        "default" !== e || "Tienes que elegir algo",
                    },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsxs)(Ga.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Qa, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsxs)(oa.a, {
                                value: s,
                                disabled: !0,
                                children: ["Estado del contrato", " "],
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Firmado",
                                children: "Firmado por los dos",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Firmado por Pet Sitter",
                                children: "Firmado por Pet Sitter",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Firmado por Cliente",
                                children: "Firmado por Cliente",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "No firmado",
                                children: "No Firmado",
                              }),
                            ],
                          }),
                          Object(j.jsx)(La.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(Ka, {
                    children: Object(j.jsx)("h2", { children: "Mascotas" }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)("section", {
                    children: u.map((e, t) =>
                      Object(j.jsxs)(
                        Ua,
                        {
                          children: [
                            Object(j.jsx)(wt.a, {
                              name: "pets[".concat(t, "].petName"),
                              control: i,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Wa, {
                                  ...t,
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  variant: "outlined",
                                  size: "medium",
                                  margin: "dense",
                                  label: "Nombre de la Mascota",
                                });
                              },
                            }),
                            Object(j.jsx)(wt.a, {
                              name: "pets[".concat(t, "].petType"),
                              control: i,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Wa, {
                                  ...t,
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  variant: "outlined",
                                  label: "Que mascota es? (gato, perro)",
                                });
                              },
                            }),
                            Object(j.jsx)(wt.a, {
                              name: "pets[".concat(t, "].comment"),
                              control: i,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Wa, {
                                  multiline: !0,
                                  rows: 5,
                                  ...t,
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  variant: "outlined",
                                  label: "Notas sobre la mascota",
                                });
                              },
                            }),
                            Object(j.jsx)(Ja, {
                              variant: "contained",
                              onClick: () => x(t),
                              children: "Eliminar Mascota",
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  Object(j.jsx)(Ja, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => {
                      p({ petName: " ", petType: " ", comment: " " });
                    },
                    children: "A\xf1adir Mascota",
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(Ja, {
                    variant: "contained",
                    color: "primary",
                    type: "submit",
                    children: "Guardar",
                  }),
                  Object(j.jsx)(Ja, {
                    variant: "contained",
                    color: "secondary",
                    onClick: c,
                    children: "Cancelar",
                  }),
                ],
              }),
            })
          );
        };
      const tn = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let an = {
        name: "",
        estadoContrato: "No Firmado",
        modeloContrato: "12 + IVA",
      };
      const nn = p.a.section(
          Xa || (Xa = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        rn = p.a.div(
          Za ||
            (Za = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        cn = p.a.section(
          $a ||
            ($a = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var sn = (e) => {
        let { token: t, user: a } = e;
        const [r, c] = Object(n.useState)(an),
          [s, o] = Object(n.useState)(!1),
          [i, l] = Object(n.useState)([]),
          [d, b] = Object(n.useState)(!1),
          [u, p] = Object(n.useState)(!1);
        async function x() {
          const e = await Ia.getCustomers(t);
          l(e);
        }
        Object(n.useEffect)(() => {
          x();
        }, [s]);
        const O = () => {
            p(!1), b(!1), o(!s), c(an);
          },
          h = (e) => {
            c(e), b(!0), p(!0);
          },
          m = async (e) => {
            window.confirm("do you want to save it?")
              ? await Ia.saveToPdf(t, e)
              : console.log("so bad!");
          },
          g = async (e) => {
            window.confirm("Do you really want to delete the file?")
              ? (await Ia.deleteCustomer(t, e), await x(), o(!s), O())
              : console.log("so bad!");
          };
        return Object(j.jsx)(nn, {
          children: Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)(rn, {
                children: Object(j.jsx)(v.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => p(!0),
                  children: "Nuevo Cliente",
                }),
              }),
              Object(j.jsx)(cn, {
                children: i
                  ? Object(j.jsx)(Ra, {
                      data: i,
                      handleClick: h,
                      saveToPdf: m,
                      deleteCustomer: g,
                    })
                  : null,
              }),
              Object(j.jsx)(dt.a, {
                open: u,
                onClose: () => O(),
                children: Object(j.jsx)("div", {
                  style: tn,
                  children: Object(j.jsx)(en, {
                    submitCRMForm: d
                      ? async (e, a) => {
                          a.preventDefault(),
                            await Ia.editCustomer(t, e),
                            o(!s),
                            O();
                        }
                      : async (e, a) => {
                          a.preventDefault(),
                            await Ia.saveCustomer(t, e),
                            o(!s),
                            O();
                        },
                    customer: r,
                    isEditing: d,
                    closeModal: () => O(),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      const on = "https://gordianknot.xyz/api",
        ln = "bugtracker";
      var dn,
        jn,
        bn,
        un,
        pn = async (e) => {
          try {
            return (
              await O.a.get("".concat(on, "/").concat(ln), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        },
        xn = async (e, t) => {
          try {
            return (
              await O.a.post("".concat(on, "/").concat(ln), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (a) {
            console.log("Error sending data"), console.log(a);
          }
        },
        On = async (e, t) => {
          try {
            await O.a.put("".concat(on, "/").concat(ln, "/").concat(t._id), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        hn = async (e, t) => {
          try {
            await O.a.delete("".concat(on, "/").concat(ln, "/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        };
      Nt.a.extend(Kt.a);
      const mn = p.a.table(
          dn ||
            (dn = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        gn = p.a.thead(
          jn ||
            (jn = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        fn = p.a.div(
          bn ||
            (bn = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    padding-left: 10px;\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        vn = p.a.div(un || (un = Object(u.a)([""])));
      var yn,
        Cn,
        kn,
        wn,
        Sn,
        Nn,
        Tn = (e) => {
          let { data: t, handleClick: a, deleteCustomer: r } = e;
          const [c, s] = Object(n.useState)(""),
            o = Object(n.useMemo)(
              () => [
                {
                  Header: "Descripcion",
                  accessor: "descripcion",
                  sortBy: "string",
                },
                { Header: "Estado", accessor: "estadoBug" },
                {
                  Header: "Fecha report",
                  accessor: (e) => {
                    return (t = e.reportedAt), Nt()(t).format("DD/MM/YYYY");
                    var t;
                  },
                  sortBy: "datetime",
                  Cell: (e) =>
                    Object(j.jsx)(j.Fragment, { children: e.cell.value }),
                },
                { Header: "Assignado a", accessor: "assignadoA" },
                { Header: "Severidad", accessor: "severidad" },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(Xt.a, {
                      className: "delete",
                      onClick: () => r(e.cell.row.original._id),
                      children: "PDF",
                    }),
                },
              ],
              []
            ),
            {
              getTableProps: i,
              getTableBodyProps: l,
              headerGroups: d,
              page: b,
              prepareRow: u,
              setFilter: p,
              canPreviousPage: x,
              canNextPage: O,
              pageOptions: h,
              pageCount: m,
              gotoPage: g,
              nextPage: f,
              previousPage: v,
              setPageSize: y,
              state: { pageIndex: C, pageSize: k },
            } = Object(Ut.useTable)(
              { columns: o, data: t },
              Ut.useFilters,
              Ut.useSortBy,
              Ut.usePagination
            );
          return Object(j.jsxs)(fn, {
            children: [
              Object(j.jsx)("input", {
                value: c,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  p("name", t), s(t);
                },
                placeholder: "Buscar por nome",
              }),
              Object(j.jsxs)(mn, {
                className: "-highlight",
                ...i(),
                children: [
                  Object(j.jsx)(gn, {
                    children: d.map((e) =>
                      Object(j.jsx)("tr", {
                        ...e.getHeaderGroupProps(),
                        children: e.headers.map((e) =>
                          Object(j.jsx)("th", {
                            ...e.getHeaderProps(e.getSortByToggleProps()),
                            children: Object(j.jsxs)("div", {
                              children: [
                                e.render("Header"),
                                Object(j.jsx)("span", {
                                  children: e.isSorted
                                    ? e.isSortedDesc
                                      ? Object(j.jsx)(ja.a, {})
                                      : Object(j.jsx)(la.a, {})
                                    : "",
                                }),
                              ],
                            }),
                          })
                        ),
                      })
                    ),
                  }),
                  Object(j.jsx)("tbody", {
                    className: "rt-tbody",
                    ...l(),
                    children: b.map(
                      (e) => (
                        u(e),
                        Object(j.jsx)(
                          "tr",
                          {
                            children: e.cells.map((e) =>
                              "Download" !== e.column.Header &&
                              "Delete" !== e.column.Header
                                ? Object(j.jsx)("td", {
                                    className: "react-td",
                                    ...e.getCellProps(),
                                    onMouseEnter: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "#F1769A";
                                    },
                                    onMouseLeave: (e) => {
                                      e.target.parentNode.style.backgroundColor =
                                        "inherit";
                                    },
                                    onClick: () => {
                                      a(e.row.original);
                                    },
                                    children: e.render("Cell"),
                                  })
                                : Object(j.jsx)("td", {
                                    ...e.getCellProps(),
                                    children: e.render("Cell"),
                                  })
                            ),
                          },
                          e.original._id
                        )
                      )
                    ),
                  }),
                ],
              }),
              Object(j.jsxs)(vn, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => g(0),
                    disabled: !x,
                    children: Object(j.jsx)(ta.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => v(),
                    disabled: !x,
                    children: Object(j.jsx)(ca.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(),
                    disabled: !O,
                    children: Object(j.jsx)(na.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => g(m - 1),
                    disabled: !O,
                    children: Object(j.jsx)($t.a, {}),
                  }),
                  " ",
                  Object(j.jsxs)("span", {
                    children: [
                      "P\xe1gina",
                      Object(j.jsxs)("strong", {
                        children: [C + 1, " de ", h.length],
                      }),
                      " ",
                    ],
                  }),
                  Object(j.jsxs)("span", {
                    children: [
                      "| Ir a p\xe1gina:",
                      " ",
                      Object(j.jsx)("input", {
                        type: "number",
                        defaultValue: C + 1,
                        onChange: (e) => {
                          const t = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          g(t);
                        },
                        style: { width: "100px" },
                      }),
                    ],
                  }),
                  " ",
                  Object(j.jsx)(sa.a, {
                    value: k,
                    onChange: (e) => {
                      y(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsxs)(
                        oa.a,
                        { value: e, children: ["Mostrar ", e] },
                        e
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        };
      const Pn = p.a.div(
          yn ||
            (yn = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        En = p.a.form(
          Cn ||
            (Cn = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"],\n  select,\n  option {\n    background-color: #f3f3f3;\n    border: none;\n    margin: 10px;\n  }\n  & select,\n  option {\n    padding: 10px;\n  }\n',
            ]))
        ),
        In = Object(p.a)(y.a)(
          kn ||
            (kn = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Dn = Object(p.a)(sa.a)(
          wn ||
            (wn = Object(u.a)([
              "\n  background-color: #f3f3f3;\n  margin: 10px;\n  & input {\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        An = Object(p.a)(v.a)(
          Sn || (Sn = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        Bn = p.a.div(Nn || (Nn = Object(u.a)(["\n  align-self: center;\n"])));
      var qn,
        _n,
        Fn,
        zn = (e) => {
          let { isEditing: t, submitBugForm: a, bug: r, closeModal: c } = e;
          const [s, o] = Object(n.useState)("default"),
            {
              control: i,
              handleSubmit: l,
              reset: d,
            } = Object(wt.c)({ defaultValues: {} }),
            {
              fields: b,
              append: u,
              remove: p,
              replace: x,
            } = Object(wt.b)({ control: i, name: "comments" });
          return (
            Object(n.useEffect)(() => {
              t &&
                (d(
                  {
                    descripcion: r.descripcion,
                    estadoBug: r.estadoBug,
                    severidad: r.severidad,
                    _id: r._id,
                    projectId: r.projectId,
                    __v: r.__v,
                  },
                  { keepDefaultValues: !0 }
                ),
                x(r.comments));
            }, []),
            Object(j.jsx)("div", {
              children: Object(j.jsxs)(En, {
                onSubmit: l(a),
                children: [
                  Object(j.jsx)(Bn, {
                    children: Object(j.jsx)("h2", {
                      children: " Reportar Bug ",
                    }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(wt.a, {
                    name: "descripcion",
                    control: i,
                    rules: { required: "Campo requerido" },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsx)(In, {
                        ...t,
                        error: !!a,
                        helperText: a ? a.message : null,
                        label: "Descripci\xf3n del Bug",
                        variant: "outlined",
                      });
                    },
                  }),
                  Object(j.jsx)(wt.a, {
                    name: "estadoBug",
                    control: i,
                    defaultValue: s,
                    rules: {
                      required: "Campo requerido",
                      validate: (e) =>
                        "default" !== e || "Tienes que elegir algo",
                    },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsxs)(Ga.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Dn, {
                            variant: "outlined",
                            ...t,
                            children: [
                              Object(j.jsx)(oa.a, {
                                value: s,
                                disabled: !0,
                                children: "Estado del Bug",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Abierto",
                                children: "Abierto",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "En progresso",
                                children: "En progresso",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Realizando Pruebas",
                                children: "Realizando Pruebas",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "OK",
                                children: "OK",
                              }),
                            ],
                          }),
                          Object(j.jsx)(La.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(wt.a, {
                    name: "severidad",
                    control: i,
                    defaultValue: s,
                    rules: {
                      required: "Campo requerido",
                      validate: (e) =>
                        "default" !== e || "Tienes que elegir algo",
                    },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsxs)(Ga.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Dn, {
                            ...t,
                            variant: "outlined",
                            helperText: a ? a.message : null,
                            children: [
                              Object(j.jsx)(oa.a, {
                                value: s,
                                disabled: !0,
                                children: "Severidad del Bug",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Poca",
                                children: "Poca",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Cuando Puedas",
                                children: "Cuando Puedas",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Importante",
                                children: "Importante",
                              }),
                              Object(j.jsx)(oa.a, {
                                value: "Urgente",
                                children: "Urgente",
                              }),
                            ],
                          }),
                          Object(j.jsx)(La.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(Bn, {
                    children: Object(j.jsx)("h2", { children: "Comentarios" }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)("section", {
                    children: b.map((e, t) =>
                      Object(j.jsxs)(
                        Pn,
                        {
                          children: [
                            Object(j.jsx)(wt.a, {
                              name: "comments[".concat(t, "].contenido"),
                              control: i,
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(In, {
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  ...t,
                                  multiline: !0,
                                  variant: "outlined",
                                  rows: 5,
                                });
                              },
                            }),
                            Object(j.jsx)(An, {
                              variant: "contained",
                              onClick: () => p(t),
                              children: "Eliminar",
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  Object(j.jsx)(An, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => u({ contenido: "" }),
                    children: "A\xf1adir Comentario",
                  }),
                  Object(j.jsx)(An, {
                    variant: "contained",
                    color: "primary",
                    type: "submit",
                    children: "Guardar",
                  }),
                  Object(j.jsx)(An, {
                    variant: "contained",
                    color: "secondary",
                    onClick: c,
                    children: "Cancelar",
                  }),
                ],
              }),
            })
          );
        };
      const Mn = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let Hn = { descripcion: "", estadoBug: "Abierto", severidad: "Poca" };
      const Vn = p.a.section(
          qn || (qn = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        Rn = p.a.div(
          _n ||
            (_n = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        Gn = p.a.section(
          Fn ||
            (Fn = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var Ln,
        Un,
        Yn = (e) => {
          let { token: t } = e;
          const [a, r] = Object(n.useState)(Hn),
            [c, s] = Object(n.useState)(!1),
            [o, i] = Object(n.useState)([]),
            [l, d] = Object(n.useState)(!1),
            [b, u] = Object(n.useState)(!1);
          async function p() {
            const e = await pn(t);
            i(e);
          }
          Object(n.useEffect)(() => {
            p();
          }, [c]);
          const x = () => {
              u(!1), d(!1), s(!c);
            },
            O = (e) => {
              r(e), d(!0), u(!0);
            },
            h = async (e) => {
              window.confirm("Do you really want to delete the file?")
                ? (await hn(t, e), await p(), s(!c), x())
                : console.log("so bad!");
            };
          return Object(j.jsx)(Vn, {
            children: Object(j.jsxs)("div", {
              children: [
                Object(j.jsx)(Rn, {
                  children: Object(j.jsx)(v.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => u(!0),
                    children: "Nuevo Bug",
                  }),
                }),
                Object(j.jsx)(Gn, {
                  children: o
                    ? Object(j.jsx)(Tn, {
                        data: o,
                        handleClick: O,
                        deleteCustomer: h,
                      })
                    : null,
                }),
                Object(j.jsx)(dt.a, {
                  open: b,
                  onClose: () => x(),
                  children: Object(j.jsx)("div", {
                    style: Mn,
                    children: Object(j.jsx)(zn, {
                      isEditing: l,
                      submitBugForm: l
                        ? async (e, a) => {
                            a.preventDefault(), await On(t, e), s(!c), x();
                          }
                        : async (e, a) => {
                            a.preventDefault(), await xn(t, e), s(!c), x();
                          },
                      bug: a,
                      closeModal: () => x(),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Kn = a(243);
      const Jn = p.a.div(Ln || (Ln = Object(u.a)([""]))),
        Wn = p.a.div(
          Un ||
            (Un = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n",
            ]))
        );
      var Qn = () =>
        Object(j.jsxs)(Wn, {
          children: [
            Object(j.jsx)(Jn, {
              children: Object(j.jsx)("h2", {
                children: "Bienvenido a Gordian Knot",
              }),
            }),
            Object(j.jsx)("p", {
              children:
                "Este es un proyecto en desarrollo. Es una webapp para gestionar peque\xf1as empresas y equipos.",
            }),
            Object(j.jsx)("p", {
              children:
                "Esta hecho con MERN stack, en el front end utilizo Material UI como libreria y Styled-Components para el estilo. El testing es con Jest, utiliza Puppetter para el renderizado de pdf y react-beautiful-dnd para la lista de tareas.",
            }),
            Object(j.jsxs)("p", {
              children: [
                "Lo cre\xe9 para ayudar en la organizaci\xf3n y gesti\xf3n de la empresa que soy co-fundador,",
                " ",
                Object(j.jsx)("a", {
                  href: "https://www.furmidablefamily.com",
                  children: "Furmidable Family",
                }),
                ".",
              ],
            }),
            Object(j.jsxs)("p", {
              children: [
                "Si quieres saber m\xe1s contactame por",
                " ",
                Object(j.jsx)("a", {
                  href: "https://linkedin.com/in/joaoemmerich",
                  children: "LinkedIn",
                }),
              ],
            }),
            Object(j.jsx)("p", { children: "Jo\xe3o Emmerich" }),
            Object(j.jsx)("hr", {}),
            Object(j.jsx)(Jn, {
              children: Object(j.jsx)("h2", { children: "Roadmap" }),
            }),
            Object(j.jsxs)(Ce.a, {
              children: [
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(Je.a, { children: "MVP" }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, { children: "User Roles" }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children:
                        "Gesti\xf3n de Usuarios / A\xf1adir Colaboradores",
                    }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children: "Dashboard con estad\xedsticas",
                    }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children:
                        "Subir ficheros / Gestionar contratos de los clientes",
                    }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children: "Validaci\xf3n de los formularios",
                    }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children: "Notificaciones con Socket.IO",
                    }),
                  ],
                }),
                Object(j.jsxs)(ke.a, {
                  children: [
                    Object(j.jsx)(we.a, {
                      children: Object(j.jsx)(Kn.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(Je.a, {
                      children:
                        "Establecer tema front-end / A\xf1adir tema oscuro",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      const Xn = "https://gordianknot.xyz/api",
        Zn = "project";
      var $n,
        er = async (e, t) => {
          try {
            const a = await O.a.post("".concat(Xn, "/").concat(Zn), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
            return console.log(a), a.data;
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        tr = async (e) => {
          try {
            return (
              await O.a.get("".concat(Xn, "/").concat(Zn, "/user"), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        },
        ar = async (e, t) => {
          try {
            return await O.a.put("".concat(Xn, "/user"), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        };
      const nr = Object(p.a)(y.a)(
        $n ||
          ($n = Object(u.a)([
            "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
          ]))
      );
      var rr,
        cr = (e) => {
          let { token: t, user: a } = e;
          const [r, c] = Object(n.useState)(""),
            [s, o] = Object(n.useState)(!1),
            [i, l] = Object(n.useState)(),
            { updateUser: d, updateWorkingProjectContext: b } = Object(
              n.useContext
            )(C),
            [u, p] = Object(n.useState)("default");
          Object(n.useEffect)(() => {
            !(async function () {
              const e = await tr(t);
              d(e);
            })();
          }, [s]);
          const x = () => {
            "Cual proyecto quieres trabajar?" !== i &&
              (b(i),
              (async (e) => {
                const n = a.projects.find((t) => t.projectName === e);
                await ar(t, n);
              })(i));
          };
          return Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)("p", { children: "Estos son los ajustes." }),
              Object(j.jsx)("p", {
                children:
                  "Puede crear nuevo projecto y a\xf1adir compa\xf1eros con su nombre de usuario.",
              }),
              Object(j.jsx)("p", {
                children:
                  "Muestra los projectos que tiene y su rol en cada uno",
              }),
              Object(j.jsx)("p", {
                children: "Muestra su nombre de usuario, y su id ",
              }),
              Object(j.jsxs)("div", {
                children: [
                  Object(j.jsx)("h2", { children: "Crear nuevo projecto" }),
                  Object(j.jsx)("div", {
                    children: Object(j.jsx)(nr, {
                      placeholder: "Nombre del projecto",
                      variant: "outlined",
                      type: "text",
                      id: "username",
                      margin: "dense",
                      onChange: (e) => c(e.target.value),
                      value: r,
                    }),
                  }),
                  Object(j.jsx)(v.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () =>
                      (async () => {
                        const e = {
                          projectName: r,
                          projectUsers: [{ userId: a._id, role: "admin" }],
                        };
                        await er(t, e), c(""), o(!s);
                      })(),
                    children: "Enviar",
                  }),
                ],
              }),
              Object(j.jsxs)("div", {
                children: [
                  Object(j.jsx)("h2", { children: "Elegir proyecto" }),
                  Object(j.jsxs)(sa.a, {
                    defaultValue: u,
                    onChange: (e) => {
                      var t;
                      "Cual proyecto quieres trabajar?" !==
                        (t = e.target.value) && l(t);
                    },
                    name: "workingProject",
                    variant: "outlined",
                    children: [
                      Object(j.jsx)(oa.a, {
                        value: u,
                        disabled: !0,
                        children: "Cual proyecto quieres trabajar?",
                      }),
                      a && a.projects
                        ? a.projects.map((e) =>
                            Object(j.jsx)(
                              oa.a,
                              { value: e.projectName, children: e.projectName },
                              e._id
                            )
                          )
                        : null,
                    ],
                  }),
                  Object(j.jsx)(v.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => x(),
                    children: "Elegir",
                  }),
                ],
              }),
            ],
          });
        };
      const sr = Object(ee.a)(() => ({
          root: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            color: "#000133",
          },
          appBar: { background: "#00022E", color: "#FC86AA" },
          icon: { padding: "10px" },
          title: { margin: "auto" },
          container: { display: "flex", flex: 1 },
          drawer: { position: "static", transition: "width .7s" },
          closed: { width: "53px" },
          opened: { width: "240px" },
          main: { flex: 1, background: "#f7f5f5", color: "black" },
          footer: { background: "#00022E", height: "50px", color: "#FC86AA" },
        })),
        or = p.a.div(rr || (rr = Object(u.a)(["\n  height: 55px;\n"])));
      function ir(e) {
        let { token: t } = e;
        const a = sr(),
          [r, c] = Object(n.useState)(!1),
          { user: s, logout: i, selectedProject: l } = Object(n.useContext)(C);
        return Object(j.jsxs)("div", {
          className: a.root,
          children: [
            Object(j.jsx)(or, {
              children: Object(j.jsx)(J.a, {
                className: a.appBar,
                children: Object(j.jsxs)(W.a, {
                  children: [
                    Object(j.jsx)(Z.a, {
                      color: "inherit",
                      onClick: () => c(!r),
                      className: a.icon,
                      children: r
                        ? Object(j.jsx)(K.a, {})
                        : Object(j.jsx)(U.a, {}),
                    }),
                    Object(j.jsx)(Q.a, {
                      variant: "h6",
                      children: "Gordian Knot",
                    }),
                    Object(j.jsxs)(Q.a, {
                      variant: "h6",
                      style: { marginLeft: "auto" },
                      children: [
                        " ",
                        l && "" !== l.projectName
                          ? Object(j.jsxs)("p", {
                              children: [
                                "Estas trabajando en: ",
                                Object(j.jsxs)("span", {
                                  style: { color: "white" },
                                  children: [" ", l.projectName, " "],
                                }),
                              ],
                            })
                          : Object(j.jsx)(v.a, {
                              href: "http://localhost:3000/app/ajustes",
                              variant: "contained",
                              color: "secondary",
                              children: "Elegir Proyecto",
                            }),
                        " ",
                      ],
                    }),
                    Object(j.jsxs)(v.a, {
                      variant: "contained",
                      color: "secondary",
                      onClick: () => i(),
                      style: { marginLeft: "auto" },
                      children: ["Logout", " "],
                    }),
                  ],
                }),
              }),
            }),
            Object(j.jsxs)("div", {
              className: a.container,
              children: [
                Object(j.jsx)(X.a, {
                  variant: "permanent",
                  classes: {
                    paper: Object($.a)(a.drawer, {
                      [a.closed]: !r,
                      [a.opened]: r,
                    }),
                  },
                  children: Object(j.jsx)(lt, {}),
                }),
                Object(j.jsx)("main", {
                  className: a.main,
                  children: Object(j.jsxs)(o.d, {
                    children: [
                      Object(j.jsx)(o.b, {
                        path: "/app/board",
                        children: Object(j.jsx)(Ye, {
                          token: t,
                          user: s,
                          selectedProject: l,
                        }),
                      }),
                      Object(j.jsx)(o.b, {
                        path: "/app/bugtracker",
                        children: Object(j.jsx)(Yn, {
                          token: t,
                          user: s,
                          selectedProject: l,
                        }),
                      }),
                      Object(j.jsx)(o.b, {
                        path: "/app/customer",
                        children: Object(j.jsx)(sn, {
                          token: t,
                          user: s,
                          selectedProject: l,
                        }),
                      }),
                      Object(j.jsx)(o.b, {
                        path: "/app/pdf",
                        children: Object(j.jsx)(wa, {
                          token: t,
                          user: s,
                          selectedProject: l,
                        }),
                      }),
                      Object(j.jsx)(o.b, {
                        path: "/app/ajustes",
                        children: Object(j.jsx)(cr, {
                          token: t,
                          user: s,
                          selectedProject: l,
                        }),
                      }),
                      Object(j.jsx)(o.b, {
                        path: "/app",
                        token: t,
                        user: s,
                        selectedProject: l,
                        exact: !0,
                        children: Object(j.jsx)(Qn, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(j.jsx)("footer", {
              className: a.footer,
              children: Object(j.jsx)(Q.a, { variant: "h6" }),
            }),
          ],
        });
      }
      var lr = () =>
        Object(j.jsxs)("header", {
          className: "header",
          children: [
            Object(j.jsx)("div", {
              className: "img-container",
              children: Object(j.jsx)("img", {
                src: window.location.origin + "/todo.png",
                alt: "todo Logo",
              }),
            }),
            Object(j.jsx)("div", {
              className: "header-container",
              children: Object(j.jsxs)("ul", {
                className: "header-list",
                children: [
                  Object(j.jsx)("li", { children: "08035 Barcelona" }),
                  Object(j.jsx)("li", { children: "Espa\xf1a" }),
                ],
              }),
            }),
          ],
        });
      var dr = (e) => {
        let { invoice: t } = e;
        const {
          invoiceNumber: a,
          invoiceDate: n,
          invoiceTotal: r,
          orderNumber: c,
          clientName: s,
        } = t;
        return Object(j.jsxs)("section", {
          className: "cust-details-container",
          children: [
            Object(j.jsxs)("div", {
              className: "cust-details",
              children: [
                Object(j.jsx)("h2", { children: "Factura en nombre de: " }),
                Object(j.jsx)("ul", {
                  className: "cust-details-items",
                  children: Object(j.jsx)("li", { children: s }),
                }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "invoice-details",
              children: [
                Object(j.jsx)("h2", { children: "Detalles" }),
                Object(j.jsxs)("div", {
                  className: "detail-lists",
                  children: [
                    Object(j.jsxs)("ul", {
                      children: [
                        Object(j.jsx)("li", { children: "Numero de factura " }),
                        Object(j.jsx)("li", { children: "Fecha de factura" }),
                      ],
                    }),
                    Object(j.jsxs)("ul", {
                      className: "detail-lists-results",
                      children: [
                        Object(j.jsxs)("li", { children: [a, " "] }),
                        Object(j.jsx)("li", { children: n }),
                      ],
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "total-container",
                  children: [
                    Object(j.jsx)("p", { children: "Total:" }),
                    Object(j.jsxs)("p", { children: ["\u20ac ", r] }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var jr = (e) => {
        let { articles: t } = e;
        return Object(j.jsx)("div", {
          className: "table-container",
          children: Object(j.jsxs)("table", {
            className: "articles-table pdf-table",
            children: [
              Object(j.jsx)("thead", {
                className: "pdf-thead",
                children: Object(j.jsxs)("tr", {
                  children: [
                    Object(j.jsx)("td", {
                      className: "pdf-td",
                      colSpan: "2",
                      children: "Articulo",
                    }),
                    Object(j.jsxs)("td", {
                      className: "td-centered pdf-td",
                      children: [
                        "Precio Unidad ",
                        Object(j.jsx)("br", {}),
                        Object(j.jsx)("span", {
                          className: "iva-detail",
                          children: "IVA INCL",
                        }),
                      ],
                    }),
                    Object(j.jsx)("td", {
                      className: "pdf-td",
                      children: "Unidades",
                    }),
                    Object(j.jsxs)("td", {
                      className: "td-centered pdf-td",
                      children: [
                        "Precio total ",
                        Object(j.jsx)("br", {}),
                        Object(j.jsx)("span", {
                          className: "iva-detail",
                          children: "IVA INCL",
                        }),
                      ],
                    }),
                    Object(j.jsx)("td", {
                      className: "pdf-td",
                      children: "Tasa IVA",
                    }),
                  ],
                }),
              }),
              Object(j.jsx)("tbody", {
                className: "pdf-tbody",
                children: t.map((e) =>
                  Object(j.jsxs)(
                    "tr",
                    {
                      children: [
                        Object(j.jsx)("td", {
                          className: "pdf-td",
                          colSpan: "2",
                          children: e.articleName,
                        }),
                        Object(j.jsxs)("td", {
                          className: "td-centered pdf-td",
                          children: ["\u20ac ", e.pricePerUnit],
                        }),
                        Object(j.jsx)("td", {
                          className: "td-centered pdf-td",
                          children: e.quantity,
                        }),
                        Object(j.jsxs)("td", {
                          className: "td-centered pdf-td",
                          children: ["\u20ac ", e.totalPrice],
                        }),
                        Object(j.jsxs)("td", {
                          className: "td-centered pdf-td",
                          children: ["% ", e.vat],
                        }),
                      ],
                    },
                    e.articleId
                  )
                ),
              }),
            ],
          }),
        });
      };
      var br = (e) => {
        let { invoice: t } = e;
        const { invoiceTotal: a, invoiceSubTotal: n, invoiceTax: r } = t;
        return Object(j.jsxs)("div", {
          className: "desglose-container",
          children: [
            Object(j.jsxs)("div", {
              className: "total-container",
              children: [
                Object(j.jsx)("p", { children: "Total: " }),
                Object(j.jsxs)("p", { children: ["\u20ac", a] }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "desglose-p",
              children: [
                " ",
                Object(j.jsx)("p", { children: "Desglose del IVA: " }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "desglose",
              children: [
                Object(j.jsxs)("p", { children: ["\u20ac", n] }),
                Object(j.jsx)("p", { children: "m\xe1s iva de 21%" }),
                Object(j.jsxs)("p", { children: ["\u20ac", r] }),
              ],
            }),
          ],
        });
      };
      a(190);
      var ur = (e) => {
        let { match: t } = e;
        const [a, r] = Object(n.useState)(null);
        return (
          Object(n.useEffect)(() => {
            const e = localStorage.getItem(d.ACCESS_TOKEN);
            e &&
              O.a
                .get(
                  ""
                    .concat("https://gordianknot.xyz/api", "/pdf/")
                    .concat(t.params.id),
                  { headers: { Authorization: "Bearer: ".concat(e) } }
                )
                .then((e) => {
                  r(e.data);
                });
          }, [t.params]),
          Object(j.jsx)("main", {
            className: "main",
            children: Object(j.jsx)("section", {
              className: "document",
              children: Object(j.jsx)("section", {
                className: "page",
                children: Object(j.jsxs)("div", {
                  className: "pdf-content",
                  children: [
                    Object(j.jsx)(lr, {}),
                    Object(j.jsx)("hr", {}),
                    null !== a
                      ? Object(j.jsxs)(j.Fragment, {
                          children: [
                            Object(j.jsx)(dr, { invoice: a, client: a.client }),
                            Object(j.jsx)(jr, { articles: a.articles }),
                            Object(j.jsx)("hr", {}),
                            Object(j.jsx)(br, { invoice: a }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            }),
          })
        );
      };
      var pr = () => {
        const [e, t] = Object(n.useState)();
        return Object(j.jsx)("div", {
          children: Object(j.jsx)(k, {
            children: Object(j.jsx)(o.c, {
              history: l,
              children: Object(j.jsxs)(o.d, {
                children: [
                  Object(j.jsx)(b, { component: ir, path: "/app", user: e }),
                  Object(j.jsx)(b, {
                    component: ur,
                    path: "/topdf/:id",
                    user: e,
                  }),
                  Object(j.jsx)(o.b, {
                    path: "/",
                    children: Object(j.jsx)(V, {}),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      a(191);
      const xr = document.getElementById("root");
      s.a.render(
        Object(j.jsx)(n.StrictMode, { children: Object(j.jsx)(pr, {}) }),
        xr
      );
    },
  },
  [[192, 1, 2]],
]);
//# sourceMappingURL=main.b288a165.chunk.js.map
