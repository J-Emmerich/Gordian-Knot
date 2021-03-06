(this["webpackJsonpgordian-knot-dashboard"] =
  this["webpackJsonpgordian-knot-dashboard"] || []).push([
  [0],
  {
    181: function (e, t, a) {},
    183: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(12),
        o = a.n(r),
        s = a(17),
        l = a(22),
        i = Object(l.a)();
      var d = {
          ACCESS_TOKEN: "ACCESS_TOKEN",
          LOGGED_USER: "LOGGED_USER",
          SELECTED_PROJECT: "SELECTED_PROJECT",
        },
        j = a(1);
      var b = (e) => {
          let { component: t, user: a, ...n } = e;
          const c = localStorage.getItem(d.ACCESS_TOKEN);
          return Object(j.jsx)(s.b, {
            ...n,
            render: (e) =>
              c
                ? Object(j.jsx)(t, { ...e, token: c })
                : Object(j.jsx)(s.a, { to: "/" }),
          });
        },
        u = a(7);
      var O = a(127),
        p = a.n(O),
        x = a(126),
        h = a.n(x),
        m = a(230),
        g = a(228),
        v = a(85),
        f = a(236),
        y = a(227),
        C = a(220),
        S = a(4),
        N = a(225),
        E = a(8);
      const w = Object(n.createContext)(),
        T = (e) => {
          let { children: t } = e;
          const [a, c] = Object(n.useState)({}),
            [r, o] = Object(n.useState)();
          Object(n.useEffect)(() => {
            localStorage.getItem(d.LOGGED_USER) &&
              (c(JSON.parse(localStorage.getItem(d.LOGGED_USER))),
              localStorage.getItem(d.SELECTED_PROJECT) &&
                o(JSON.parse(localStorage.getItem(d.SELECTED_PROJECT))));
          }, []);
          return Object(j.jsx)(w.Provider, {
            value: {
              user: a,
              login: (e) => {
                if (
                  (localStorage.setItem(d.ACCESS_TOKEN, e.token),
                  localStorage.setItem(d.LOGGED_USER, JSON.stringify(e.user)),
                  c(e.user),
                  e.user.currentProject && "" !== e.user.currentProject)
                ) {
                  const t = e.user.projects.find(
                      (t) => t._id === e.user.currentProject
                    ),
                    a = { projectName: t.projectName, projectId: t._id };
                  o(a);
                }
                i.push({ pathname: "/app" });
              },
              logout: () => {
                localStorage.removeItem(d.ACCESS_TOKEN),
                  localStorage.removeItem(d.LOGGED_USER),
                  c({}),
                  o({ projectId: "", projectName: "" }),
                  i.push({ pathname: "/" });
              },
              updateUser: (e) => {
                try {
                  c(e);
                } catch (t) {
                  console.log(t);
                }
              },
              selectedProject: r,
              updateWorkingProjectContext: (e) => {
                const t = a.projects.find((t) => t.projectName === e),
                  n = { projectName: t.projectName, projectId: t._id };
                o(n);
              },
            },
            children: t,
          });
        };
      var P,
        _ = a(51),
        k = a(214),
        A = a(185),
        D = a(218),
        I = a(219),
        F = a(119),
        R = a.n(F),
        q = a(121),
        B = a.n(q),
        H = a(120),
        V = a.n(H),
        L = a(122),
        U = a.n(L);
      const M = E.a.div(P || (P = Object(u.a)(["\n  overflow: hidden;\n"])));
      function K(e) {
        const { icon: t, primary: a, to: n } = e,
          r = c.a.useMemo(
            () =>
              c.a.forwardRef((e, t) =>
                Object(j.jsx)(_.a, {
                  activeClassName: "active-nav-link",
                  to: n,
                  ...e,
                })
              ),
            [n]
          );
        return Object(j.jsx)("li", {
          children: Object(j.jsxs)(A.a, {
            button: !0,
            component: r,
            children: [
              t ? Object(j.jsx)(D.a, { children: t }) : null,
              Object(j.jsx)(I.a, { primary: a }),
            ],
          }),
        });
      }
      var z = function () {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)(k.a, {
              component: M,
              children: [
                Object(j.jsx)(K, {
                  to: "/app",
                  primary: "Home",
                  icon: Object(j.jsx)(R.a, { color: "primary" }),
                }),
                Object(j.jsx)(K, {
                  to: "/app/pdf",
                  primary: "Facturas",
                  icon: Object(j.jsx)(V.a, { color: "primary" }),
                }),
                Object(j.jsx)(K, {
                  to: "/app/customer",
                  primary: "Clientes",
                  icon: Object(j.jsx)(B.a, { color: "primary" }),
                }),
                Object(j.jsx)(K, {
                  to: "/app/ajustes",
                  primary: "Ajustes",
                  icon: Object(j.jsx)(U.a, { color: "primary" }),
                }),
              ],
            }),
          });
        },
        G = a(233),
        W = a(15),
        J = a.n(W);
      var Y = (e, t) => {
        const a = window.URL.createObjectURL(new Blob([e.data])),
          n = document.createElement("a");
        (n.href = a),
          n.setAttribute("download", "".concat(t, ".pdf")),
          document.body.appendChild(n),
          n.click();
      };
      const Q =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).REACT_APP_API_ENDPOINT || "/api",
        X = "invoice";
      var Z,
        $,
        ee,
        te,
        ae,
        ne,
        ce,
        re = async (e) => {
          try {
            return (
              await J.a.get("".concat(Q, "/").concat(X), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data.data;
          } catch (t) {
            console.log(t);
          }
        },
        oe = async (e, t) => {
          try {
            await J.a.post("".concat(Q, "/").concat(X), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        se = async (e, t) => {
          try {
            await J.a.put("".concat(Q, "/").concat(X, "/").concat(t._id), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        le = async (e, t) => {
          try {
            await J.a.delete("".concat(Q, "/").concat(X, "/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        ie = async (e, t) => {
          try {
            const a = await J.a.get(
              "".concat(Q, "/").concat(X, "/download/").concat(t),
              {
                headers: { Authorization: "Bearer: ".concat(e) },
                responseType: "blob",
              }
            );
            Y(a, t);
          } catch (a) {
            console.log(a);
          }
        },
        de = a(16),
        je = a(235),
        be = a(28),
        ue = a.n(be),
        Oe = a(123),
        pe = a.n(Oe),
        xe = a(124),
        he = a(231),
        me = a(21);
      ue.a.extend(pe.a);
      const ge = E.a.div(
          Z ||
            (Z = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        ve = E.a.form(
          $ ||
            ($ = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"] {\n    background-color: #f3f3f3;\n    border: none;\n  }\n',
            ]))
        ),
        fe = E.a.div(ee || (ee = Object(u.a)(["\n  align-self: center;\n"]))),
        ye = E.a.div(
          te ||
            (te = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  & fieldset {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-around;\n  }\n  & div {\n    display: flex;\n    margin: 5px 10px 5px 10px;\n    flex-grow: 1;\n  }\n",
            ]))
        ),
        Ce = Object(E.a)(C.a)(
          ae || (ae = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        Se = Object(E.a)(je.a)(
          ne ||
            (ne = Object(u.a)([
              "\n  margin: 0px 20px;\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Ne = Object(E.a)(he.a)(
          ce || (ce = Object(u.a)(["\n  & input {\n    padding: 20px;\n  }\n"]))
        );
      var Ee,
        we,
        Te,
        Pe,
        _e = (e) => {
          let { onSubmit: t, isEditing: a, invoice: c, closeModal: r } = e;
          const [o, s] = Object(n.useState)(null),
            {
              control: l,
              handleSubmit: i,
              reset: d,
              setValue: b,
            } = Object(de.c)({ defaultValues: {} }),
            {
              fields: u,
              append: O,
              remove: p,
              replace: x,
            } = Object(de.b)({ control: l, name: "articles" });
          Object(n.useEffect)(() => {
            a &&
              (d(
                {
                  clientName: c.clientName,
                  invoiceNumber: c.invoiceNumber,
                  invoiceDate: c.invoiceDate,
                  orderNumber: c.orderNumber || "",
                  invoiceTotal: c.invoiceTotal,
                  invoiceSubTotal: c.invoiceSubTotal,
                  invoiceTax: c.invoiceTax,
                  _id: c._id,
                  projectId: c.projectId,
                  __v: c.__v,
                },
                { keepDefaultValues: !0 }
              ),
              x(c.articles)),
              s(c.invoiceDate);
          }, []);
          return Object(j.jsx)("div", {
            children: Object(j.jsxs)(ve, {
              onSubmit: i(t),
              children: [
                Object(j.jsx)(fe, {
                  children: Object(j.jsxs)("h2", {
                    children: [
                      "Factura n# ",
                      Object(j.jsx)("span", { children: c.invoiceNumber }),
                    ],
                  }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsxs)(ye, {
                  children: [
                    Object(j.jsxs)("fieldset", {
                      children: [
                        Object(j.jsx)(de.a, {
                          name: "clientName",
                          control: l,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Se, {
                              label: "Nombre del cliente",
                              variant: "outlined",
                              margin: "none",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(de.a, {
                          name: "invoiceNumber",
                          control: l,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Se, {
                              label: "Numero de la factura",
                              variant: "outlined",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(de.a, {
                          name: "orderNumber",
                          control: l,
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Se, {
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
                      children: Object(j.jsx)(me.a, {
                        utils: xe.a,
                        children: Object(j.jsx)(Ne, {
                          autoOk: !0,
                          inputVariant: "standard",
                          variant: "inline",
                          format: "DD/MM/YYYY",
                          margin: "normal",
                          id: "date-picker-inline",
                          placeholder: "Fecha de la Factura",
                          value: o || ue.a.utc(),
                          onChange: (e) =>
                            ((e) => {
                              ue()(e).isValid() &&
                                (ue()(e).utc(!0).format(), s(e));
                            })(e),
                          KeyboardButtonProps: { "aria-label": "change date" },
                          name: "invoiceDate",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(j.jsx)(fe, {
                  children: Object(j.jsx)("h2", { children: "Itens " }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)("section", {
                  children: u.map((e, t) =>
                    Object(j.jsxs)(
                      ge,
                      {
                        children: [
                          Object(j.jsx)(de.a, {
                            name: "articles[".concat(t, "].articleName"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Se, {
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Art\xedculo",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(de.a, {
                            name: "articles[".concat(t, "].pricePerUnit"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Se, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Precio por unidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(de.a, {
                            name: "articles[".concat(t, "].quantity"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Se, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Cuantidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(de.a, {
                            name: "articles[".concat(t, "].vat"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Se, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "IVA",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(de.a, {
                            name: "articles[".concat(t, "].totalPrice"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Se, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Precio Total",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(C.a, {
                            variant: "contained",
                            color: "secondary",
                            onClick: () => p(t),
                            children: "Eliminar art\xedculo",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                Object(j.jsx)(C.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => {
                    console.log("click"),
                      O({
                        articleName: "",
                        pricePerUnit: 0,
                        quantity: 0,
                        vat: 21,
                        totalPrice: 0,
                      });
                  },
                  children: "A\xf1adir Art\xedculo",
                }),
                Object(j.jsx)(fe, {
                  children: Object(j.jsx)("h2", { children: "Total" }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)(de.a, {
                  name: "invoiceTotal",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Se, {
                      type: "number",
                      label: "Total Factura",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(de.a, {
                  name: "invoiceSubTotal",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Se, {
                      type: "number",
                      label: "Base Imponible",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(de.a, {
                  name: "invoiceTax",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Se, {
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
                Object(j.jsx)(Ce, {
                  variant: "contained",
                  color: "primary",
                  type: "submit",
                  children: "Guardar Factura",
                }),
                Object(j.jsx)(Ce, {
                  variant: "contained",
                  color: "secondary",
                  onClick: r,
                  children: "Cancelar",
                }),
              ],
            }),
          });
        },
        ke = a(41),
        Ae = a(59),
        De = a.n(Ae),
        Ie = a(91),
        Fe = a.n(Ie),
        Re = a(78),
        qe = a.n(Re),
        Be = a(84),
        He = a.n(Be),
        Ve = a(81),
        Le = a.n(Ve),
        Ue = a(83),
        Me = a.n(Ue),
        Ke = a(82),
        ze = a.n(Ke),
        Ge = a(232),
        We = a(229),
        Je = a(80),
        Ye = a.n(Je),
        Qe = a(79),
        Xe = a.n(Qe);
      ue.a.extend(De.a);
      const Ze = E.a.table(
          Ee ||
            (Ee = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        $e = E.a.thead(
          we ||
            (we = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        et = E.a.div(
          Te ||
            (Te = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    padding-left: 10px;\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        tt = E.a.div(Pe || (Pe = Object(u.a)(["\n  width: 100%;\n"])));
      var at,
        nt,
        ct,
        rt = (e) => {
          let { data: t, handleClick: a, saveToPdf: c, deleteInvoice: r } = e;
          const [o, s] = Object(n.useState)(""),
            l = (e) => {
              ue()(e).format("DD-MM-YYYY");
              return e;
            },
            i = Object(n.useMemo)(
              () => [
                { Header: "Nombre", accessor: "clientName", sortBy: "string" },
                {
                  Header: "Fecha",
                  accessor: (e) => e.invoiceDate,
                  sortBy: "datetime",
                  Cell: (e) =>
                    Object(j.jsx)(j.Fragment, { children: l(e.cell.value) }),
                },
                { Header: "Numero de Factura", accessor: "invoiceNumber" },
                { Header: "Total", accessor: "invoiceTotal", sortBy: "basic" },
                {
                  Header: "Download",
                  accessor: "_id",
                  Cell: (e) =>
                    Object(j.jsx)(Fe.a, {
                      className: "save-to-pdf",
                      onClick: () => c(e.cell.value),
                      children: "PDF",
                    }),
                },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(qe.a, {
                      className: "delete",
                      onClick: () => r(e.cell.row.original._id),
                      children: "PDF",
                    }),
                },
              ],
              [c]
            ),
            {
              getTableProps: d,
              getTableBodyProps: b,
              headerGroups: u,
              page: O,
              prepareRow: p,
              setFilter: x,
              canPreviousPage: h,
              canNextPage: m,
              pageOptions: g,
              pageCount: v,
              gotoPage: f,
              nextPage: y,
              previousPage: C,
              setPageSize: S,
              state: { pageIndex: N, pageSize: E },
            } = Object(ke.useTable)(
              { columns: i, data: t },
              ke.useFilters,
              ke.useSortBy,
              ke.usePagination
            );
          return Object(j.jsxs)(et, {
            children: [
              Object(j.jsx)("input", {
                value: o,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  x("clientName", t), s(t);
                },
                placeholder: "Buscar por nombre",
              }),
              Object(j.jsxs)(Ze, {
                ...d(),
                children: [
                  Object(j.jsx)($e, {
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
                                      ? Object(j.jsx)(Xe.a, {})
                                      : Object(j.jsx)(Ye.a, {})
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
                    children: O.map(
                      (e) => (
                        p(e),
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
              Object(j.jsxs)(tt, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => f(0),
                    disabled: !h,
                    children: Object(j.jsx)(Le.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => C(),
                    disabled: !h,
                    children: Object(j.jsx)(ze.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => y(),
                    disabled: !m,
                    children: Object(j.jsx)(Me.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(v - 1),
                    disabled: !m,
                    children: Object(j.jsx)(He.a, {}),
                  }),
                  " ",
                  Object(j.jsxs)("span", {
                    children: [
                      "P\xe1gina",
                      Object(j.jsxs)("strong", {
                        children: [N + 1, " de ", g.length],
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
                        defaultValue: N + 1,
                        onChange: (e) => {
                          const t = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          f(t);
                        },
                        style: { width: "100px" },
                      }),
                    ],
                  }),
                  " ",
                  Object(j.jsx)(Ge.a, {
                    value: E,
                    onChange: (e) => {
                      S(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsx)(We.a, { value: e, children: e }, e)
                    ),
                  }),
                ],
              }),
            ],
          });
        };
      const ot = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let st = {
        invoiceNumber: "",
        invoiceDate: "",
        orderNumber: "",
        invoiceTotal: "",
        invoiceSubTotal: "",
        invoiceTax: "",
        clientName: "",
        articles: "",
      };
      const lt = E.a.section(
          at || (at = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        it = E.a.div(
          nt ||
            (nt = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        dt = E.a.section(
          ct ||
            (ct = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var jt = (e) => {
        let { token: t } = e;
        const [a, c] = Object(n.useState)(st),
          [r, o] = Object(n.useState)(!1),
          [s, l] = Object(n.useState)([]),
          [i, d] = Object(n.useState)(!1),
          [b, u] = Object(n.useState)(!1);
        Object(n.useEffect)(() => {
          O();
        }, [r]);
        const O = async () => {
            try {
              const e = await re(t);
              e &&
                void 0 !== (null === e || void 0 === e ? void 0 : e.length) &&
                l(e);
            } catch (e) {
              l([]), console.log(e);
            }
          },
          p = () => {
            u(!1), d(!1), c(st);
          },
          x = (e) => {
            c(e), d(!0), u(!0);
          },
          h = async (e) => {
            window.confirm("do you want to save it?")
              ? await ie(t, e)
              : console.log("so bad!");
          },
          m = async (e) => {
            window.confirm("Do you really want to delete the file?")
              ? (await le(t, e), o(!r), p())
              : console.log("so bad!");
          };
        return Object(j.jsx)(lt, {
          children: Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)(it, {
                children: Object(j.jsx)(C.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => u(!0),
                  children: "Nueva Factura",
                }),
              }),
              Object(j.jsx)(dt, {
                children: s
                  ? Object(j.jsx)(rt, {
                      data: s,
                      handleClick: x,
                      saveToPdf: h,
                      deleteInvoice: m,
                    })
                  : null,
              }),
              Object(j.jsx)(G.a, {
                open: b,
                onClose: () => p(),
                children: Object(j.jsx)("div", {
                  style: ot,
                  children: Object(j.jsx)(_e, {
                    onSubmit: i
                      ? async (e, a) => {
                          a.preventDefault(), await se(t, e), o(!r), p();
                        }
                      : async (e, a) => {
                          a.preventDefault(), await oe(t, e), o(!r), p();
                        },
                    isEditing: i,
                    invoice: a,
                    closeModal: () => p(),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      const bt =
        Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_API_ENDPOINT || "/api";
      var ut,
        Ot,
        pt,
        xt,
        ht = {
          getCustomers: async (e) => {
            try {
              return (
                await J.a.get("".concat(bt, "/customer"), {
                  headers: { Authorization: "Bearer: ".concat(e) },
                })
              ).data.data;
            } catch (t) {
              console.log(t);
            }
          },
          saveCustomer: async (e, t) => {
            try {
              return (
                await J.a.post("".concat(bt, "/customer"), t, {
                  headers: { Authorization: "Bearer: ".concat(e) },
                })
              ).data.data;
            } catch (a) {
              console.log("Error sending data"), console.log(a);
            }
          },
          editCustomer: async (e, t) => {
            try {
              await J.a.put("".concat(bt, "/customer/").concat(t._id), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
          deleteCustomer: async (e, t) => {
            try {
              await J.a.delete("".concat(bt, "/customer/").concat(t), {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
        };
      ue.a.extend(De.a);
      const mt = E.a.table(
          ut ||
            (ut = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        gt = E.a.thead(
          Ot ||
            (Ot = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        vt = E.a.div(
          pt ||
            (pt = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        ft = E.a.div(xt || (xt = Object(u.a)([""])));
      var yt,
        Ct,
        St,
        Nt,
        Et,
        wt,
        Tt = (e) => {
          let { data: t, handleClick: a, deleteCustomer: c } = e;
          const [r, o] = Object(n.useState)(""),
            s = Object(n.useMemo)(
              () => [
                { Header: "Nombre", accessor: "name", sortBy: "string" },
                { Header: "Contrato", accessor: "estadoContrato" },
                { Header: "Modelo Contrato", accessor: "modeloContrato" },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(qe.a, {
                      className: "delete",
                      onClick: () => c(e.cell.row.original._id),
                      children: "PDF",
                    }),
                },
              ],
              []
            ),
            {
              getTableProps: l,
              getTableBodyProps: i,
              headerGroups: d,
              page: b,
              prepareRow: u,
              setFilter: O,
              canPreviousPage: p,
              canNextPage: x,
              pageOptions: h,
              pageCount: m,
              gotoPage: g,
              nextPage: v,
              previousPage: f,
              setPageSize: y,
              state: { pageIndex: C, pageSize: S },
            } = Object(ke.useTable)(
              { columns: s, data: t },
              ke.useFilters,
              ke.useSortBy,
              ke.usePagination
            );
          return Object(j.jsxs)(vt, {
            children: [
              Object(j.jsx)("input", {
                value: r,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  O("name", t), o(t);
                },
                placeholder: "Buscar por nome",
              }),
              Object(j.jsxs)(mt, {
                className: "-highlight",
                ...l(),
                children: [
                  Object(j.jsx)(gt, {
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
                                      ? Object(j.jsx)(Xe.a, {})
                                      : Object(j.jsx)(Ye.a, {})
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
                    ...i(),
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
              Object(j.jsxs)(ft, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => g(0),
                    disabled: !p,
                    children: Object(j.jsx)(Le.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(),
                    disabled: !p,
                    children: Object(j.jsx)(ze.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => v(),
                    disabled: !x,
                    children: Object(j.jsx)(Me.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => g(m - 1),
                    disabled: !x,
                    children: Object(j.jsx)(He.a, {}),
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
                  Object(j.jsx)(Ge.a, {
                    value: S,
                    onChange: (e) => {
                      y(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsxs)(
                        We.a,
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
        Pt = a(223),
        _t = a(224);
      const kt = E.a.div(
          yt ||
            (yt = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        At = E.a.form(
          Ct ||
            (Ct = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"],\n  select,\n  option {\n    background-color: #f3f3f3;\n    border: none;\n    margin: 10px;\n  }\n  & select,\n  option {\n    padding: 10px;\n  }\n',
            ]))
        ),
        Dt = E.a.div(St || (St = Object(u.a)(["\n  align-self: center;\n"]))),
        It = Object(E.a)(C.a)(
          Nt || (Nt = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        Ft = Object(E.a)(je.a)(
          Et ||
            (Et = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Rt = Object(E.a)(Ge.a)(
          wt ||
            (wt = Object(u.a)([
              "\n  background-color: #f3f3f3;\n  margin: 10px;\n  & input {\n    background-color: #f3f3f3;\n  }\n",
            ]))
        );
      var qt,
        Bt,
        Ht,
        Vt = (e) => {
          let {
            submitCRMForm: t,
            isEditing: a,
            customer: c,
            closeModal: r,
          } = e;
          const [o, s] = Object(n.useState)("default"),
            {
              control: l,
              handleSubmit: i,
              reset: d,
              setValue: b,
            } = Object(de.c)({ defaultValues: {} }),
            {
              fields: u,
              append: O,
              remove: p,
              replace: x,
            } = Object(de.b)({ control: l, name: "pets" });
          return (
            Object(n.useEffect)(() => {
              a &&
                (d(
                  {
                    name: c.name,
                    modeloContrato: c.modeloContrato,
                    estadoContrato: c.estadoContrato,
                    _id: c._id,
                    projectId: c.projectId,
                    __v: c.__v,
                  },
                  { keepDefaultValues: !0 }
                ),
                x(c.pets));
            }, []),
            Object(j.jsx)("div", {
              children: Object(j.jsxs)(At, {
                onSubmit: i(t),
                children: [
                  Object(j.jsx)(Dt, {
                    children: Object(j.jsx)("h2", {
                      children: " Detalles del Cliente",
                    }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(de.a, {
                    name: "name",
                    control: l,
                    rules: { required: "Campo requerido" },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsx)(Ft, {
                        helperText: a ? a.message : null,
                        error: !!a,
                        ...t,
                        variant: "outlined",
                        label: "Nombre del Cliente",
                      });
                    },
                  }),
                  Object(j.jsx)(de.a, {
                    name: "modeloContrato",
                    defaultValue: o,
                    control: l,
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
                      return Object(j.jsxs)(Pt.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Rt, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsx)(We.a, {
                                value: o,
                                disabled: !0,
                                children: "Modelo Contrato",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "12 IVA Inclu\xeddo",
                                children: "12",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "12 + IVA",
                                children: "12 + IVA",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "20 IVA inclu\xeddo",
                                children: "20 IVA incluido",
                              }),
                            ],
                          }),
                          Object(j.jsx)(_t.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(de.a, {
                    name: "estadoContrato",
                    defaultValue: o,
                    control: l,
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
                      return Object(j.jsxs)(Pt.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(Rt, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsxs)(We.a, {
                                value: o,
                                disabled: !0,
                                children: ["Estado del contrato", " "],
                              }),
                              Object(j.jsx)(We.a, {
                                value: "Firmado",
                                children: "Firmado por los dos",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "Firmado por Pet Sitter",
                                children: "Firmado por Pet Sitter",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "Firmado por Cliente",
                                children: "Firmado por Cliente",
                              }),
                              Object(j.jsx)(We.a, {
                                value: "No firmado",
                                children: "No Firmado",
                              }),
                            ],
                          }),
                          Object(j.jsx)(_t.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(Dt, {
                    children: Object(j.jsx)("h2", { children: "Mascotas" }),
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)("section", {
                    children: u.map((e, t) =>
                      Object(j.jsxs)(
                        kt,
                        {
                          children: [
                            Object(j.jsx)(de.a, {
                              name: "pets[".concat(t, "].petName"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Ft, {
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
                            Object(j.jsx)(de.a, {
                              name: "pets[".concat(t, "].petType"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Ft, {
                                  ...t,
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  variant: "outlined",
                                  label: "Que mascota es? (gato, perro)",
                                });
                              },
                            }),
                            Object(j.jsx)(de.a, {
                              name: "pets[".concat(t, "].comment"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(Ft, {
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
                            Object(j.jsx)(It, {
                              variant: "contained",
                              onClick: () => p(t),
                              children: "Eliminar Mascota",
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  Object(j.jsx)(It, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => {
                      O({ petName: " ", petType: " ", comment: " " });
                    },
                    children: "A\xf1adir Mascota",
                  }),
                  Object(j.jsx)("hr", {}),
                  Object(j.jsx)(It, {
                    variant: "contained",
                    color: "primary",
                    type: "submit",
                    children: "Guardar",
                  }),
                  Object(j.jsx)(It, {
                    variant: "contained",
                    color: "secondary",
                    onClick: r,
                    children: "Cancelar",
                  }),
                ],
              }),
            })
          );
        };
      const Lt = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let Ut = {
        name: "",
        estadoContrato: "No Firmado",
        modeloContrato: "12 + IVA",
      };
      const Mt = E.a.section(
          qt || (qt = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        Kt = E.a.div(
          Bt ||
            (Bt = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        zt = E.a.section(
          Ht ||
            (Ht = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var Gt,
        Wt,
        Jt = (e) => {
          let { token: t, user: a } = e;
          const [c, r] = Object(n.useState)(Ut),
            [o, s] = Object(n.useState)(!1),
            [l, i] = Object(n.useState)([]),
            [d, b] = Object(n.useState)(!1),
            [u, O] = Object(n.useState)(!1);
          async function p() {
            try {
              const e = await ht.getCustomers(t);
              e &&
                void 0 !== (null === e || void 0 === e ? void 0 : e.length) &&
                i(e);
            } catch (e) {
              i([]), console.log(e);
            }
          }
          Object(n.useEffect)(() => {
            p();
          }, [o]);
          const x = () => {
              O(!1), b(!1), s(!o), r(Ut);
            },
            h = (e) => {
              r(e), b(!0), O(!0);
            },
            m = async (e) => {
              window.confirm("do you want to save it?")
                ? await ht.saveToPdf(t, e)
                : console.log("so bad!");
            },
            g = async (e) => {
              window.confirm("Do you really want to delete the file?")
                ? (await ht.deleteCustomer(t, e), await p(), s(!o), x())
                : console.log("so bad!");
            };
          return Object(j.jsx)(Mt, {
            children: Object(j.jsxs)("div", {
              children: [
                Object(j.jsx)(Kt, {
                  children: Object(j.jsx)(C.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => O(!0),
                    children: "Nuevo Cliente",
                  }),
                }),
                Object(j.jsx)(zt, {
                  children: l
                    ? Object(j.jsx)(Tt, {
                        data: l,
                        handleClick: h,
                        saveToPdf: m,
                        deleteCustomer: g,
                      })
                    : null,
                }),
                Object(j.jsx)(G.a, {
                  open: u,
                  onClose: () => x(),
                  children: Object(j.jsx)("div", {
                    style: Lt,
                    children: Object(j.jsx)(Vt, {
                      submitCRMForm: d
                        ? async (e, a) => {
                            a.preventDefault(),
                              await ht.editCustomer(t, e),
                              s(!o),
                              x();
                          }
                        : async (e, a) => {
                            a.preventDefault(),
                              await ht.saveCustomer(t, e),
                              s(!o),
                              x();
                          },
                      customer: c,
                      isEditing: d,
                      closeModal: () => x(),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Yt = a(234);
      const Qt = E.a.div(Gt || (Gt = Object(u.a)([""]))),
        Xt = E.a.div(
          Wt ||
            (Wt = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n",
            ]))
        );
      var Zt = () =>
        Object(j.jsxs)(Xt, {
          children: [
            Object(j.jsx)(Qt, {
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
            Object(j.jsx)(Qt, {
              children: Object(j.jsx)("h2", { children: "Roadmap" }),
            }),
            Object(j.jsxs)(k.a, {
              children: [
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(I.a, { children: "MVP" }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, { children: "User Roles" }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, {
                      children:
                        "Gesti\xf3n de Usuarios / A\xf1adir Colaboradores",
                    }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, {
                      children: "Dashboard con estad\xedsticas",
                    }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, {
                      children:
                        "Subir ficheros / Gestionar contratos de los clientes",
                    }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(I.a, {
                      children: "Validaci\xf3n de los formularios",
                    }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, {
                      children: "Notificaciones con Socket.IO",
                    }),
                  ],
                }),
                Object(j.jsxs)(A.a, {
                  children: [
                    Object(j.jsx)(D.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(I.a, {
                      children:
                        "Establecer tema front-end / A\xf1adir tema oscuro",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      const $t =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).REACT_APP_API_ENDPOINT || "/api",
        ea = "setting";
      var ta,
        aa = async (e, t) => {
          try {
            return (
              await J.a.post("".concat($t, "/").concat(ea), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data.data;
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        na = async (e) => {
          try {
            return (
              await J.a.get("".concat($t, "/").concat(ea, "/user"), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data.data;
          } catch (t) {
            console.log(t);
          }
        },
        ca = async (e, t) => {
          try {
            return await J.a.put("".concat($t, "/").concat(ea), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        };
      const ra = Object(E.a)(je.a)(
        ta ||
          (ta = Object(u.a)([
            "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
          ]))
      );
      var oa,
        sa = (e) => {
          let { token: t, user: a } = e;
          const [c, r] = Object(n.useState)(""),
            [o, s] = Object(n.useState)(!1),
            [l, i] = Object(n.useState)(),
            { updateUser: d, updateWorkingProjectContext: b } = Object(
              n.useContext
            )(w),
            [u, O] = Object(n.useState)("default");
          Object(n.useEffect)(() => {
            !(async function () {
              const e = await na(t);
              d(e);
            })();
          }, [o]);
          const p = () => {
            "Cual proyecto quieres trabajar?" !== l &&
              (b(l),
              (async (e) => {
                const n = a.projects.find((t) => t.projectName === e);
                await ca(t, n);
              })(l));
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
                    children: Object(j.jsx)(ra, {
                      placeholder: "Nombre del projecto",
                      variant: "outlined",
                      type: "text",
                      id: "username",
                      margin: "dense",
                      onChange: (e) => r(e.target.value),
                      value: c,
                    }),
                  }),
                  Object(j.jsx)(C.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () =>
                      (async () => {
                        const e = {
                          projectName: c,
                          projectUsers: [{ userId: a._id, role: "admin" }],
                        };
                        await aa(t, e), r(""), s(!o);
                      })(),
                    children: "Enviar",
                  }),
                ],
              }),
              Object(j.jsxs)("div", {
                children: [
                  Object(j.jsx)("h2", { children: "Elegir proyecto" }),
                  Object(j.jsxs)(Ge.a, {
                    defaultValue: u,
                    onChange: (e) => {
                      var t;
                      "Cual proyecto quieres trabajar?" !==
                        (t = e.target.value) && i(t);
                    },
                    name: "workingProject",
                    variant: "outlined",
                    children: [
                      Object(j.jsx)(We.a, {
                        value: u,
                        disabled: !0,
                        children: "Cual proyecto quieres trabajar?",
                      }),
                      a && a.projects
                        ? a.projects.map((e) =>
                            Object(j.jsx)(
                              We.a,
                              { value: e.projectName, children: e.projectName },
                              e._id
                            )
                          )
                        : null,
                    ],
                  }),
                  Object(j.jsx)(C.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => p(),
                    children: "Elegir",
                  }),
                ],
              }),
            ],
          });
        };
      const la = Object(N.a)(() => ({
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
        ia = E.a.div(oa || (oa = Object(u.a)(["\n  height: 55px;\n"])));
      function da(e) {
        let { token: t } = e;
        const a = la(),
          [c, r] = Object(n.useState)(!1),
          { user: o, logout: l, selectedProject: i } = Object(n.useContext)(w);
        return Object(j.jsxs)("div", {
          className: a.root,
          children: [
            Object(j.jsx)(ia, {
              children: Object(j.jsx)(m.a, {
                className: a.appBar,
                children: Object(j.jsxs)(g.a, {
                  children: [
                    Object(j.jsx)(y.a, {
                      color: "inherit",
                      onClick: () => r(!c),
                      className: a.icon,
                      children: c
                        ? Object(j.jsx)(h.a, {})
                        : Object(j.jsx)(p.a, {}),
                    }),
                    Object(j.jsx)(v.a, {
                      variant: "h6",
                      children: "Gordian Knot",
                    }),
                    Object(j.jsxs)(v.a, {
                      variant: "h6",
                      style: { marginLeft: "auto" },
                      children: [
                        " ",
                        i && "" !== i.projectName
                          ? Object(j.jsxs)("p", {
                              children: [
                                "Estas trabajando en: ",
                                Object(j.jsxs)("span", {
                                  style: { color: "white" },
                                  children: [" ", i.projectName, " "],
                                }),
                              ],
                            })
                          : Object(j.jsx)(C.a, {
                              href: "http://localhost:3000/app/ajustes",
                              variant: "contained",
                              color: "secondary",
                              children: "Elegir Proyecto",
                            }),
                        " ",
                      ],
                    }),
                    Object(j.jsxs)(C.a, {
                      variant: "contained",
                      color: "secondary",
                      onClick: () => l(),
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
                Object(j.jsx)(f.a, {
                  variant: "permanent",
                  classes: {
                    paper: Object(S.a)(a.drawer, {
                      [a.closed]: !c,
                      [a.opened]: c,
                    }),
                  },
                  children: Object(j.jsx)(z, {}),
                }),
                Object(j.jsx)("main", {
                  className: a.main,
                  children: Object(j.jsxs)(s.d, {
                    children: [
                      Object(j.jsx)(s.b, {
                        path: "/app/customer",
                        children: Object(j.jsx)(Jt, {
                          token: t,
                          user: o,
                          selectedProject: i,
                        }),
                      }),
                      Object(j.jsx)(s.b, {
                        path: "/app/pdf",
                        children: Object(j.jsx)(jt, {
                          token: t,
                          user: o,
                          selectedProject: i,
                        }),
                      }),
                      Object(j.jsx)(s.b, {
                        path: "/app/ajustes",
                        children: Object(j.jsx)(sa, {
                          token: t,
                          user: o,
                          selectedProject: i,
                        }),
                      }),
                      Object(j.jsx)(s.b, {
                        path: "/app",
                        token: t,
                        user: o,
                        selectedProject: i,
                        exact: !0,
                        children: Object(j.jsx)(Zt, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(j.jsx)("footer", {
              className: a.footer,
              children: Object(j.jsx)(v.a, { variant: "h6" }),
            }),
          ],
        });
      }
      const ja =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).REACT_APP_API_ENDPOINT || "/api",
        ba = "auth";
      var ua,
        Oa,
        pa,
        xa,
        ha,
        ma,
        ga,
        va,
        fa = async (e, t) => {
          try {
            return (
              await J.a.post("".concat(ja, "/").concat(ba, "/login"), {
                username: e,
                password: t,
              })
            ).data.data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        },
        ya = async (e, t) => {
          try {
            return (
              await J.a.post("".concat(ja, "/").concat(ba, "/register"), {
                username: e,
                password: t,
              })
            ).data.data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        };
      const Ca = E.a.div(
          ua ||
            (ua = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n",
            ]))
        ),
        Sa = E.a.div(
          Oa ||
            (Oa = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  flex-grow: 1;\n",
            ]))
        ),
        Na = E.a.div(
          pa ||
            (pa = Object(u.a)([
              '\n  margin: 40px auto;\n  font-family: "Segoe UI", sans-serif;\n  padding: 25px 28px;\n  border-radius: 4px;\n  border: 1px solid #302d2d;\n  display: flex;\n  flex-flow: column wrap;\n',
            ]))
        ),
        Ea = E.a.p(
          xa ||
            (xa = Object(u.a)([
              "\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n  font-weight: 400;\n",
            ]))
        ),
        wa = E.a.p(
          ha ||
            (ha = Object(u.a)([
              "\n  text-align: center;\n  > a {\n    color: #fc86aa;\n  }\n",
            ]))
        ),
        Ta = Object(E.a)(je.a)(
          ma ||
            (ma = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n  }\n",
            ]))
        ),
        Pa = E.a.div(
          ga ||
            (ga = Object(u.a)([
              "\n  flex-grow: 0;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n  padding: 5px;\n  width: 90%;\n",
            ]))
        ),
        _a = E.a.div(
          va ||
            (va = Object(u.a)([
              "\n  display: block;\n  margin-bottom: 20px;\n",
            ]))
        );
      var ka = (e) => {
        let { submitUser: t } = e;
        const [a, c] = Object(n.useState)(!0),
          [r, o] = Object(n.useState)(null),
          [l, i] = Object(n.useState)(""),
          [b, u] = Object(n.useState)(""),
          { login: O } = Object(n.useContext)(w),
          p = localStorage.getItem(d.ACCESS_TOKEN);
        return p
          ? Object(j.jsx)(s.a, { to: "/app" })
          : Object(j.jsxs)(Ca, {
              children: [
                Object(j.jsx)("header", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsx)(Ea, { children: "Gordian Knot" }),
                }),
                Object(j.jsxs)(Sa, {
                  children: [
                    Object(j.jsxs)(Na, {
                      children: [
                        Object(j.jsx)(Ea, {
                          children: a ? "Login" : "Registro",
                        }),
                        Object(j.jsxs)("form", {
                          children: [
                            Object(j.jsx)(_a, {
                              children: Object(j.jsx)(Ta, {
                                placeholder: "Nombre de usuario",
                                variant: "outlined",
                                type: "text",
                                id: "username",
                                margin: "dense",
                                onChange: (e) => i(e.target.value),
                                value: l,
                              }),
                            }),
                            Object(j.jsx)(_a, {
                              children: Object(j.jsx)(Ta, {
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
                        Object(j.jsx)(C.a, {
                          variant: "contained",
                          color: "primary",
                          onClick: a
                            ? (e) =>
                                (async (e, t, a) => {
                                  e.preventDefault();
                                  try {
                                    const e = await fa(t, a);
                                    O(e);
                                  } catch (n) {
                                    o(n.message),
                                      setTimeout(() => {
                                        o(null);
                                      }, 2e3);
                                  }
                                })(e, l, b)
                            : (e) =>
                                (async (e, t, a) => {
                                  try {
                                    e.preventDefault();
                                    const n = await ya(t, a);
                                    O(n);
                                  } catch (n) {
                                    o(n.message),
                                      setTimeout(() => {
                                        o(null);
                                      }, 4e3);
                                  }
                                })(e, l, b),
                          children: "Enviar",
                        }),
                        Object(j.jsxs)(wa, {
                          children: [
                            "Quieres\xa0",
                            Object(j.jsx)(C.a, {
                              style: { color: "#FC86AA" },
                              onClick: () => c(!a),
                              children: a ? "te registrar" : "hacer login",
                            }),
                            "\xa0?",
                          ],
                        }),
                      ],
                    }),
                    r
                      ? Object(j.jsx)(Pa, {
                          children: Object(j.jsx)("p", { children: r }),
                        })
                      : Object(j.jsx)(Pa, { children: "\xa0" }),
                  ],
                }),
                Object(j.jsx)("footer", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsxs)(wa, {
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
      var Aa = () =>
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
      var Da = (e) => {
        let { invoice: t } = e;
        const {
          invoiceNumber: a,
          invoiceDate: n,
          invoiceTotal: c,
          orderNumber: r,
          clientName: o,
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
                  children: Object(j.jsx)("li", { children: o }),
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
                    Object(j.jsxs)("p", { children: ["\u20ac ", c] }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Ia = (e) => {
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
      var Fa = (e) => {
        let { invoice: t } = e;
        const { invoiceTotal: a, invoiceSubTotal: n, invoiceTax: c } = t;
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
                Object(j.jsxs)("p", { children: ["\u20ac", c] }),
              ],
            }),
          ],
        });
      };
      a(181);
      const Ra =
        Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_API_ENDPOINT || "/api";
      var qa = async (e, t) => {
        try {
          return (
            await J.a.get("".concat(Ra, "/").concat("invoice", "/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
            })
          ).data.data;
        } catch (a) {
          console.log(a);
        }
      };
      var Ba = (e) => {
        let { match: t } = e;
        const [a, c] = Object(n.useState)(null);
        Object(n.useEffect)(() => {
          const e = localStorage.getItem(d.ACCESS_TOKEN);
          e && r(e, t.params.id);
        }, [t.params]);
        const r = async (e, t) => {
          try {
            const a = await qa(e, t);
            c(a);
          } catch (a) {
            console.log(a);
          }
        };
        return Object(j.jsx)("main", {
          className: "main",
          children: Object(j.jsx)("section", {
            className: "document",
            children: Object(j.jsx)("section", {
              className: "page",
              children: Object(j.jsxs)("div", {
                className: "pdf-content",
                children: [
                  Object(j.jsx)(Aa, {}),
                  Object(j.jsx)("hr", {}),
                  null !== a
                    ? Object(j.jsxs)(j.Fragment, {
                        children: [
                          Object(j.jsx)(Da, { invoice: a, client: a.client }),
                          Object(j.jsx)(Ia, { articles: a.articles }),
                          Object(j.jsx)("hr", {}),
                          Object(j.jsx)(Fa, { invoice: a }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          }),
        });
      };
      var Ha = () => {
        const [e, t] = Object(n.useState)();
        return Object(j.jsx)("div", {
          children: Object(j.jsx)(T, {
            children: Object(j.jsx)(s.c, {
              history: i,
              children: Object(j.jsxs)(s.d, {
                children: [
                  Object(j.jsx)(b, { component: da, path: "/app", user: e }),
                  Object(j.jsx)(b, {
                    component: Ba,
                    path: "/topdf/:id",
                    user: e,
                  }),
                  Object(j.jsx)(s.b, {
                    path: "/",
                    children: Object(j.jsx)(ka, {}),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      a(182);
      const Va = document.getElementById("root");
      o.a.render(
        Object(j.jsx)(n.StrictMode, { children: Object(j.jsx)(Ha, {}) }),
        Va
      );
    },
  },
  [[183, 1, 2]],
]);
//# sourceMappingURL=main.a2b92818.chunk.js.map
