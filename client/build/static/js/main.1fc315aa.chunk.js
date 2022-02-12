(this["webpackJsonpgordian-knot-dashboard"] =
  this["webpackJsonpgordian-knot-dashboard"] || []).push([
  [0],
  {
    181: function (e, t, a) {},
    183: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(12),
        o = a.n(c),
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
          const r = localStorage.getItem(d.ACCESS_TOKEN);
          return Object(j.jsx)(s.b, {
            ...n,
            render: (e) =>
              r
                ? Object(j.jsx)(t, { ...e, token: r })
                : Object(j.jsx)(s.a, { to: "/" }),
          });
        },
        u = a(7);
      var p = a(127),
        x = a.n(p),
        h = a(126),
        O = a.n(h),
        m = a(230),
        g = a(228),
        v = a(85),
        f = a(236),
        y = a(227),
        C = a(220),
        N = a(4),
        w = a(225),
        S = a(8);
      const k = Object(n.createContext)(),
        E = (e) => {
          let { children: t } = e;
          const [a, r] = Object(n.useState)({}),
            [c, o] = Object(n.useState)();
          Object(n.useEffect)(() => {
            localStorage.getItem(d.LOGGED_USER) &&
              (r(JSON.parse(localStorage.getItem(d.LOGGED_USER))),
              localStorage.getItem(d.SELECTED_PROJECT) &&
                o(JSON.parse(localStorage.getItem(d.SELECTED_PROJECT))));
          }, []);
          return Object(j.jsx)(k.Provider, {
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
                  o(a);
                }
                i.push({ pathname: "/app" });
              },
              logout: () => {
                localStorage.removeItem(d.ACCESS_TOKEN),
                  localStorage.removeItem(d.LOGGED_USER),
                  r({}),
                  o({ projectId: "", projectName: "" }),
                  i.push({ pathname: "/" });
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
                o(n);
              },
            },
            children: t,
          });
        };
      var P,
        T = a(51),
        A = a(214),
        D = a(185),
        I = a(218),
        q = a(219),
        _ = a(119),
        F = a.n(_),
        B = a(121),
        M = a.n(B),
        V = a(120),
        z = a.n(V),
        G = a(122),
        L = a.n(G);
      const H = S.a.div(P || (P = Object(u.a)(["\n  overflow: hidden;\n"])));
      function R(e) {
        const { icon: t, primary: a, to: n } = e,
          c = r.a.useMemo(
            () =>
              r.a.forwardRef((e, t) =>
                Object(j.jsx)(T.a, {
                  activeClassName: "active-nav-link",
                  to: n,
                  ...e,
                })
              ),
            [n]
          );
        return Object(j.jsx)("li", {
          children: Object(j.jsxs)(D.a, {
            button: !0,
            component: c,
            children: [
              t ? Object(j.jsx)(I.a, { children: t }) : null,
              Object(j.jsx)(q.a, { primary: a }),
            ],
          }),
        });
      }
      var U = function () {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)(A.a, {
              component: H,
              children: [
                Object(j.jsx)(R, {
                  to: "/app",
                  primary: "Home",
                  icon: Object(j.jsx)(F.a, { color: "primary" }),
                }),
                Object(j.jsx)(R, {
                  to: "/app/pdf",
                  primary: "Facturas",
                  icon: Object(j.jsx)(z.a, { color: "primary" }),
                }),
                Object(j.jsx)(R, {
                  to: "/app/customer",
                  primary: "Clientes",
                  icon: Object(j.jsx)(M.a, { color: "primary" }),
                }),
                Object(j.jsx)(R, {
                  to: "/app/ajustes",
                  primary: "Ajustes",
                  icon: Object(j.jsx)(L.a, { color: "primary" }),
                }),
              ],
            }),
          });
        },
        J = a(233),
        K = a(15),
        Y = a.n(K);
      var Q = (e, t) => {
        const a = window.URL.createObjectURL(new Blob([e.data])),
          n = document.createElement("a");
        (n.href = a),
          n.setAttribute("download", "".concat(t, ".pdf")),
          document.body.appendChild(n),
          n.click();
      };
      const W = "https://gordianknot.xyz/api";
      var X,
        Z,
        $,
        ee,
        te,
        ae,
        ne,
        re = async (e) => {
          try {
            return (
              await Y.a.get("".concat(W, "/pdf"), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        },
        ce = async (e, t) => {
          try {
            await Y.a.post("".concat(W, "/pdf"), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        oe = async (e, t) => {
          try {
            await Y.a.put("".concat(W, "/pdf/").concat(t._id), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        se = async (e, t) => {
          try {
            await Y.a.delete("".concat(W, "/pdf/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        },
        le = async (e, t) => {
          try {
            const a = await Y.a.get("".concat(W, "/pdf/download/").concat(t), {
              headers: { Authorization: "Bearer: ".concat(e) },
              responseType: "blob",
            });
            Q(a, t);
          } catch (a) {
            console.log(a);
          }
        },
        ie = a(16),
        de = a(235),
        je = a(28),
        be = a.n(je),
        ue = a(123),
        pe = a.n(ue),
        xe = a(124),
        he = a(231),
        Oe = a(21);
      be.a.extend(pe.a);
      const me = S.a.div(
          X ||
            (X = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        ge = S.a.form(
          Z ||
            (Z = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"] {\n    background-color: #f3f3f3;\n    border: none;\n  }\n',
            ]))
        ),
        ve = S.a.div($ || ($ = Object(u.a)(["\n  align-self: center;\n"]))),
        fe = S.a.div(
          ee ||
            (ee = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  & fieldset {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-around;\n  }\n  & div {\n    display: flex;\n    margin: 5px 10px 5px 10px;\n    flex-grow: 1;\n  }\n",
            ]))
        ),
        ye = Object(S.a)(C.a)(
          te || (te = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        Ce = Object(S.a)(de.a)(
          ae ||
            (ae = Object(u.a)([
              "\n  margin: 0px 20px;\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        Ne = Object(S.a)(he.a)(
          ne || (ne = Object(u.a)(["\n  & input {\n    padding: 20px;\n  }\n"]))
        );
      var we,
        Se,
        ke,
        Ee,
        Pe = (e) => {
          let { onSubmit: t, isEditing: a, invoice: r, closeModal: c } = e;
          const [o, s] = Object(n.useState)(null),
            {
              control: l,
              handleSubmit: i,
              reset: d,
              setValue: b,
            } = Object(ie.c)({ defaultValues: {} }),
            {
              fields: u,
              append: p,
              remove: x,
              replace: h,
            } = Object(ie.b)({ control: l, name: "articles" });
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
              h(r.articles)),
              s(r.invoiceDate);
          }, []);
          return Object(j.jsx)("div", {
            children: Object(j.jsxs)(ge, {
              onSubmit: i(t),
              children: [
                Object(j.jsx)(ve, {
                  children: Object(j.jsxs)("h2", {
                    children: [
                      "Factura n# ",
                      Object(j.jsx)("span", { children: r.invoiceNumber }),
                    ],
                  }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsxs)(fe, {
                  children: [
                    Object(j.jsxs)("fieldset", {
                      children: [
                        Object(j.jsx)(ie.a, {
                          name: "clientName",
                          control: l,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Ce, {
                              label: "Nombre del cliente",
                              variant: "outlined",
                              margin: "none",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(ie.a, {
                          name: "invoiceNumber",
                          control: l,
                          rules: { required: "Campo requerido" },
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Ce, {
                              label: "Numero de la factura",
                              variant: "outlined",
                              ...t,
                              error: !!a,
                              helperText: a ? a.message : null,
                            });
                          },
                        }),
                        Object(j.jsx)(ie.a, {
                          name: "orderNumber",
                          control: l,
                          render: (e) => {
                            let {
                              field: t,
                              fieldState: { error: a },
                            } = e;
                            return Object(j.jsx)(Ce, {
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
                      children: Object(j.jsx)(Oe.a, {
                        utils: xe.a,
                        children: Object(j.jsx)(Ne, {
                          autoOk: !0,
                          inputVariant: "standard",
                          variant: "inline",
                          format: "DD/MM/YYYY",
                          margin: "normal",
                          id: "date-picker-inline",
                          placeholder: "Fecha de la Factura",
                          value: o || be.a.utc(),
                          onChange: (e) =>
                            ((e) => {
                              be()(e).isValid() &&
                                (be()(e).utc(!0).format(), s(e));
                            })(e),
                          KeyboardButtonProps: { "aria-label": "change date" },
                          name: "invoiceDate",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(j.jsx)(ve, {
                  children: Object(j.jsx)("h2", { children: "Itens " }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)("section", {
                  children: u.map((e, t) =>
                    Object(j.jsxs)(
                      me,
                      {
                        children: [
                          Object(j.jsx)(ie.a, {
                            name: "articles[".concat(t, "].articleName"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Ce, {
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Art\xedculo",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(ie.a, {
                            name: "articles[".concat(t, "].pricePerUnit"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Ce, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Precio por unidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(ie.a, {
                            name: "articles[".concat(t, "].quantity"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Ce, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "Cuantidad",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(ie.a, {
                            name: "articles[".concat(t, "].vat"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Ce, {
                                type: "number",
                                helperText: a ? a.message : null,
                                error: !!a,
                                label: "IVA",
                                variant: "outlined",
                                ...t,
                              });
                            },
                          }),
                          Object(j.jsx)(ie.a, {
                            name: "articles[".concat(t, "].totalPrice"),
                            control: l,
                            rules: { required: "este campo es requerido" },
                            render: (e) => {
                              let {
                                field: t,
                                fieldState: { error: a },
                              } = e;
                              return Object(j.jsx)(Ce, {
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
                            onClick: () => x(t),
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
                Object(j.jsx)(ve, {
                  children: Object(j.jsx)("h2", { children: "Total" }),
                }),
                Object(j.jsx)("hr", {}),
                Object(j.jsx)(ie.a, {
                  name: "invoiceTotal",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Ce, {
                      type: "number",
                      label: "Total Factura",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(ie.a, {
                  name: "invoiceSubTotal",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Ce, {
                      type: "number",
                      label: "Base Imponible",
                      variant: "outlined",
                      ...t,
                      error: !!a,
                      helperText: a ? a.message : null,
                    });
                  },
                }),
                Object(j.jsx)(ie.a, {
                  name: "invoiceTax",
                  control: l,
                  rules: { required: "campo requerido" },
                  render: (e) => {
                    let {
                      field: t,
                      fieldState: { error: a },
                    } = e;
                    return Object(j.jsx)(Ce, {
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
                Object(j.jsx)(ye, {
                  variant: "contained",
                  color: "primary",
                  type: "submit",
                  children: "Guardar Factura",
                }),
                Object(j.jsx)(ye, {
                  variant: "contained",
                  color: "secondary",
                  onClick: c,
                  children: "Cancelar",
                }),
              ],
            }),
          });
        },
        Te = a(41),
        Ae = a(59),
        De = a.n(Ae),
        Ie = a(91),
        qe = a.n(Ie),
        _e = a(78),
        Fe = a.n(_e),
        Be = a(84),
        Me = a.n(Be),
        Ve = a(81),
        ze = a.n(Ve),
        Ge = a(83),
        Le = a.n(Ge),
        He = a(82),
        Re = a.n(He),
        Ue = a(232),
        Je = a(229),
        Ke = a(80),
        Ye = a.n(Ke),
        Qe = a(79),
        We = a.n(Qe);
      be.a.extend(De.a);
      const Xe = S.a.table(
          we ||
            (we = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        Ze = S.a.thead(
          Se ||
            (Se = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        $e = S.a.div(
          ke ||
            (ke = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    padding-left: 10px;\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        et = S.a.div(Ee || (Ee = Object(u.a)(["\n  width: 100%;\n"])));
      var tt,
        at,
        nt,
        rt = (e) => {
          let { data: t, handleClick: a, saveToPdf: r, deleteInvoice: c } = e;
          const [o, s] = Object(n.useState)(""),
            l = (e) => {
              be()(e).format("DD-MM-YYYY");
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
                    Object(j.jsx)(qe.a, {
                      className: "save-to-pdf",
                      onClick: () => r(e.cell.value),
                      children: "PDF",
                    }),
                },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(Fe.a, {
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
              setFilter: h,
              canPreviousPage: O,
              canNextPage: m,
              pageOptions: g,
              pageCount: v,
              gotoPage: f,
              nextPage: y,
              previousPage: C,
              setPageSize: N,
              state: { pageIndex: w, pageSize: S },
            } = Object(Te.useTable)(
              { columns: i, data: t },
              Te.useFilters,
              Te.useSortBy,
              Te.usePagination
            );
          return Object(j.jsxs)($e, {
            children: [
              Object(j.jsx)("input", {
                value: o,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  h("clientName", t), s(t);
                },
                placeholder: "Buscar por nombre",
              }),
              Object(j.jsxs)(Xe, {
                ...d(),
                children: [
                  Object(j.jsx)(Ze, {
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
                                      ? Object(j.jsx)(We.a, {})
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
              Object(j.jsxs)(et, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => f(0),
                    disabled: !O,
                    children: Object(j.jsx)(ze.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => C(),
                    disabled: !O,
                    children: Object(j.jsx)(Re.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => y(),
                    disabled: !m,
                    children: Object(j.jsx)(Le.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(v - 1),
                    disabled: !m,
                    children: Object(j.jsx)(Me.a, {}),
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
                          f(t);
                        },
                        style: { width: "100px" },
                      }),
                    ],
                  }),
                  " ",
                  Object(j.jsx)(Ue.a, {
                    value: S,
                    onChange: (e) => {
                      N(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsx)(Je.a, { value: e, children: e }, e)
                    ),
                  }),
                ],
              }),
            ],
          });
        };
      const ct = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let ot = {
        invoiceNumber: "",
        invoiceDate: "",
        orderNumber: "",
        invoiceTotal: "",
        invoiceSubTotal: "",
        invoiceTax: "",
        clientName: "",
        articles: "",
      };
      const st = S.a.section(
          tt || (tt = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        lt = S.a.div(
          at ||
            (at = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        it = S.a.section(
          nt ||
            (nt = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var dt = (e) => {
        let { token: t } = e;
        const [a, r] = Object(n.useState)(ot),
          [c, o] = Object(n.useState)(!1),
          [s, l] = Object(n.useState)([]),
          [i, d] = Object(n.useState)(!1),
          [b, u] = Object(n.useState)(!1);
        Object(n.useEffect)(() => {
          p();
        }, [c]);
        const p = async () => {
            try {
              const e = await re(t);
              e &&
                void 0 !== (null === e || void 0 === e ? void 0 : e.length) &&
                l(e);
            } catch (e) {
              l([]), console.log(e);
            }
          },
          x = () => {
            u(!1), d(!1), r(ot);
          },
          h = (e) => {
            r(e), d(!0), u(!0);
          },
          O = async (e) => {
            window.confirm("do you want to save it?")
              ? await le(t, e)
              : console.log("so bad!");
          },
          m = async (e) => {
            window.confirm("Do you really want to delete the file?")
              ? (await se(t, e), o(!c), x())
              : console.log("so bad!");
          };
        return Object(j.jsx)(st, {
          children: Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)(lt, {
                children: Object(j.jsx)(C.a, {
                  variant: "contained",
                  color: "primary",
                  onClick: () => u(!0),
                  children: "Nueva Factura",
                }),
              }),
              Object(j.jsx)(it, {
                children: s
                  ? (console.log(s),
                    Object(j.jsx)(rt, {
                      data: s,
                      handleClick: h,
                      saveToPdf: O,
                      deleteInvoice: m,
                    }))
                  : null,
              }),
              Object(j.jsx)(J.a, {
                open: b,
                onClose: () => x(),
                children: Object(j.jsx)("div", {
                  style: ct,
                  children: Object(j.jsx)(Pe, {
                    onSubmit: i
                      ? async (e, a) => {
                          a.preventDefault(), await oe(t, e), o(!c), x();
                        }
                      : async (e, a) => {
                          a.preventDefault(), await ce(t, e), o(!c), x();
                        },
                    isEditing: i,
                    invoice: a,
                    closeModal: () => x(),
                  }),
                }),
              }),
            ],
          }),
        });
      };
      const jt = "https://gordianknot.xyz/api";
      var bt,
        ut,
        pt,
        xt,
        ht = {
          getCustomers: async (e) => {
            try {
              return (
                await Y.a.get("".concat(jt, "/customer"), {
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
                await Y.a.post("".concat(jt, "/customer"), t, {
                  headers: { Authorization: "Bearer: ".concat(e) },
                })
              ).data;
            } catch (a) {
              console.log("Error sending data"), console.log(a);
            }
          },
          editCustomer: async (e, t) => {
            try {
              await Y.a.put("".concat(jt, "/customer/").concat(t._id), t, {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
          deleteCustomer: async (e, t) => {
            try {
              await Y.a.delete("".concat(jt, "/customer/").concat(t), {
                headers: { Authorization: "Bearer: ".concat(e) },
              });
            } catch (a) {
              console.log(a);
            }
          },
        };
      be.a.extend(De.a);
      const Ot = S.a.table(
          bt ||
            (bt = Object(u.a)([
              "\n  border-collapse: collapse;\n  border-radius: 1em;\n  overflow: hidden;\n  width: 100%;\n",
            ]))
        ),
        mt = S.a.thead(
          ut ||
            (ut = Object(u.a)([
              "\n  background-color: #eee;\n  & th {\n    padding: 20px;\n  }\n",
            ]))
        ),
        gt = S.a.div(
          pt ||
            (pt = Object(u.a)([
              "\n  padding-top: 15px;\n  .react-td,\n  .save-to-pdf,\n  .delete {\n    :hover {\n      cursor: pointer;\n    }\n  }\n  td {\n    padding: 10px;\n  }\n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n  th {\n    height: 30px;\n    & div {\n      display: flex;\n      align-items: center;\n    }\n  }\n",
            ]))
        ),
        vt = S.a.div(xt || (xt = Object(u.a)([""])));
      var ft,
        yt,
        Ct,
        Nt,
        wt,
        St,
        kt = (e) => {
          let { data: t, handleClick: a, deleteCustomer: r } = e;
          const [c, o] = Object(n.useState)(""),
            s = Object(n.useMemo)(
              () => [
                { Header: "Nombre", accessor: "name", sortBy: "string" },
                { Header: "Contrato", accessor: "estadoContrato" },
                { Header: "Modelo Contrato", accessor: "modeloContrato" },
                {
                  Header: "Delete",
                  accessor: "",
                  Cell: (e) =>
                    Object(j.jsx)(Fe.a, {
                      className: "delete",
                      onClick: () => r(e.cell.row.original._id),
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
              setFilter: p,
              canPreviousPage: x,
              canNextPage: h,
              pageOptions: O,
              pageCount: m,
              gotoPage: g,
              nextPage: v,
              previousPage: f,
              setPageSize: y,
              state: { pageIndex: C, pageSize: N },
            } = Object(Te.useTable)(
              { columns: s, data: t },
              Te.useFilters,
              Te.useSortBy,
              Te.usePagination
            );
          return Object(j.jsxs)(gt, {
            children: [
              Object(j.jsx)("input", {
                value: c,
                onChange: (e) => {
                  const t = e.target.value || void 0;
                  p("name", t), o(t);
                },
                placeholder: "Buscar por nome",
              }),
              Object(j.jsxs)(Ot, {
                className: "-highlight",
                ...l(),
                children: [
                  Object(j.jsx)(mt, {
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
                                      ? Object(j.jsx)(We.a, {})
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
              Object(j.jsxs)(vt, {
                children: [
                  Object(j.jsx)("button", {
                    onClick: () => g(0),
                    disabled: !x,
                    children: Object(j.jsx)(ze.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => f(),
                    disabled: !x,
                    children: Object(j.jsx)(Re.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => v(),
                    disabled: !h,
                    children: Object(j.jsx)(Le.a, {}),
                  }),
                  " ",
                  Object(j.jsx)("button", {
                    onClick: () => g(m - 1),
                    disabled: !h,
                    children: Object(j.jsx)(Me.a, {}),
                  }),
                  " ",
                  Object(j.jsxs)("span", {
                    children: [
                      "P\xe1gina",
                      Object(j.jsxs)("strong", {
                        children: [C + 1, " de ", O.length],
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
                  Object(j.jsx)(Ue.a, {
                    value: N,
                    onChange: (e) => {
                      y(Number(e.target.value));
                    },
                    children: [10, 20, 30, 40, 50].map((e) =>
                      Object(j.jsxs)(
                        Je.a,
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
        Et = a(223),
        Pt = a(224);
      const Tt = S.a.div(
          ft ||
            (ft = Object(u.a)([
              "\n  display: flex;\n  background-color: #eee;\n  margin: 10px;\n  flex-flow: column wrap;\n  & button {\n    align-self: center;\n    margin-bottom: 10px;\n  }\n",
            ]))
        ),
        At = S.a.form(
          yt ||
            (yt = Object(u.a)([
              '\n  display: flex;\n  flex-flow: column wrap;\n  margin: 0px 10px;\n  & fieldset {\n    border: solid 0 black;\n  }\n  & input[type="text"],\n  input[type="number"],\n  select,\n  option {\n    background-color: #f3f3f3;\n    border: none;\n    margin: 10px;\n  }\n  & select,\n  option {\n    padding: 10px;\n  }\n',
            ]))
        ),
        Dt = S.a.div(Ct || (Ct = Object(u.a)(["\n  align-self: center;\n"]))),
        It = Object(S.a)(C.a)(
          Nt || (Nt = Object(u.a)(["\n  && {\n    margin: 5px 0px;\n  }\n"]))
        ),
        qt = Object(S.a)(de.a)(
          wt ||
            (wt = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
            ]))
        ),
        _t = Object(S.a)(Ue.a)(
          St ||
            (St = Object(u.a)([
              "\n  background-color: #f3f3f3;\n  margin: 10px;\n  & input {\n    background-color: #f3f3f3;\n  }\n",
            ]))
        );
      var Ft,
        Bt,
        Mt,
        Vt = (e) => {
          let {
            submitCRMForm: t,
            isEditing: a,
            customer: r,
            closeModal: c,
          } = e;
          const [o, s] = Object(n.useState)("default"),
            {
              control: l,
              handleSubmit: i,
              reset: d,
              setValue: b,
            } = Object(ie.c)({ defaultValues: {} }),
            {
              fields: u,
              append: p,
              remove: x,
              replace: h,
            } = Object(ie.b)({ control: l, name: "pets" });
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
                h(r.pets));
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
                  Object(j.jsx)(ie.a, {
                    name: "name",
                    control: l,
                    rules: { required: "Campo requerido" },
                    render: (e) => {
                      let {
                        field: t,
                        fieldState: { error: a },
                      } = e;
                      return Object(j.jsx)(qt, {
                        helperText: a ? a.message : null,
                        error: !!a,
                        ...t,
                        variant: "outlined",
                        label: "Nombre del Cliente",
                      });
                    },
                  }),
                  Object(j.jsx)(ie.a, {
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
                      return Object(j.jsxs)(Et.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(_t, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsx)(Je.a, {
                                value: o,
                                disabled: !0,
                                children: "Modelo Contrato",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "12 IVA Inclu\xeddo",
                                children: "12",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "12 + IVA",
                                children: "12 + IVA",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "20 IVA inclu\xeddo",
                                children: "20 IVA incluido",
                              }),
                            ],
                          }),
                          Object(j.jsx)(Pt.a, {
                            children: a ? a.message : null,
                          }),
                        ],
                      });
                    },
                  }),
                  Object(j.jsx)(ie.a, {
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
                      return Object(j.jsxs)(Et.a, {
                        error: !!a,
                        children: [
                          Object(j.jsxs)(_t, {
                            ...t,
                            variant: "outlined",
                            children: [
                              Object(j.jsxs)(Je.a, {
                                value: o,
                                disabled: !0,
                                children: ["Estado del contrato", " "],
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "Firmado",
                                children: "Firmado por los dos",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "Firmado por Pet Sitter",
                                children: "Firmado por Pet Sitter",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "Firmado por Cliente",
                                children: "Firmado por Cliente",
                              }),
                              Object(j.jsx)(Je.a, {
                                value: "No firmado",
                                children: "No Firmado",
                              }),
                            ],
                          }),
                          Object(j.jsx)(Pt.a, {
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
                        Tt,
                        {
                          children: [
                            Object(j.jsx)(ie.a, {
                              name: "pets[".concat(t, "].petName"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(qt, {
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
                            Object(j.jsx)(ie.a, {
                              name: "pets[".concat(t, "].petType"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(qt, {
                                  ...t,
                                  error: !!a,
                                  helperText: a ? a.message : null,
                                  variant: "outlined",
                                  label: "Que mascota es? (gato, perro)",
                                });
                              },
                            }),
                            Object(j.jsx)(ie.a, {
                              name: "pets[".concat(t, "].comment"),
                              control: l,
                              defaultValue: "",
                              rules: { required: "Campo requerido" },
                              render: (e) => {
                                let {
                                  field: t,
                                  fieldState: { error: a },
                                } = e;
                                return Object(j.jsx)(qt, {
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
                              onClick: () => x(t),
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
                      p({ petName: " ", petType: " ", comment: " " });
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
                    onClick: c,
                    children: "Cancelar",
                  }),
                ],
              }),
            })
          );
        };
      const zt = {
        backgroundColor: "white",
        position: "absolute",
        width: "50%",
        height: "70%",
        left: "20%",
        top: "15%",
        overflowY: "auto",
      };
      let Gt = {
        name: "",
        estadoContrato: "No Firmado",
        modeloContrato: "12 + IVA",
      };
      const Lt = S.a.section(
          Ft || (Ft = Object(u.a)(["\n  padding-top: 20px;\n"]))
        ),
        Ht = S.a.div(
          Bt ||
            (Bt = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        Rt = S.a.section(
          Mt ||
            (Mt = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top: 20px;\n",
            ]))
        );
      var Ut,
        Jt,
        Kt = (e) => {
          let { token: t, user: a } = e;
          const [r, c] = Object(n.useState)(Gt),
            [o, s] = Object(n.useState)(!1),
            [l, i] = Object(n.useState)([]),
            [d, b] = Object(n.useState)(!1),
            [u, p] = Object(n.useState)(!1);
          async function x() {
            const e = await ht.getCustomers(t);
            i(e);
          }
          Object(n.useEffect)(() => {
            x();
          }, [o]);
          const h = () => {
              p(!1), b(!1), s(!o), c(Gt);
            },
            O = (e) => {
              c(e), b(!0), p(!0);
            },
            m = async (e) => {
              window.confirm("do you want to save it?")
                ? await ht.saveToPdf(t, e)
                : console.log("so bad!");
            },
            g = async (e) => {
              window.confirm("Do you really want to delete the file?")
                ? (await ht.deleteCustomer(t, e), await x(), s(!o), h())
                : console.log("so bad!");
            };
          return Object(j.jsx)(Lt, {
            children: Object(j.jsxs)("div", {
              children: [
                Object(j.jsx)(Ht, {
                  children: Object(j.jsx)(C.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () => p(!0),
                    children: "Nuevo Cliente",
                  }),
                }),
                Object(j.jsx)(Rt, {
                  children: l
                    ? Object(j.jsx)(kt, {
                        data: l,
                        handleClick: O,
                        saveToPdf: m,
                        deleteCustomer: g,
                      })
                    : null,
                }),
                Object(j.jsx)(J.a, {
                  open: u,
                  onClose: () => h(),
                  children: Object(j.jsx)("div", {
                    style: zt,
                    children: Object(j.jsx)(Vt, {
                      submitCRMForm: d
                        ? async (e, a) => {
                            a.preventDefault(),
                              await ht.editCustomer(t, e),
                              s(!o),
                              h();
                          }
                        : async (e, a) => {
                            a.preventDefault(),
                              await ht.saveCustomer(t, e),
                              s(!o),
                              h();
                          },
                      customer: r,
                      isEditing: d,
                      closeModal: () => h(),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Yt = a(234);
      const Qt = S.a.div(Ut || (Ut = Object(u.a)([""]))),
        Wt = S.a.div(
          Jt ||
            (Jt = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n",
            ]))
        );
      var Xt = () =>
        Object(j.jsxs)(Wt, {
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
            Object(j.jsxs)(A.a, {
              children: [
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(q.a, { children: "MVP" }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, { children: "User Roles" }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, {
                      children:
                        "Gesti\xf3n de Usuarios / A\xf1adir Colaboradores",
                    }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, {
                      children: "Dashboard con estad\xedsticas",
                    }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, {
                      children:
                        "Subir ficheros / Gestionar contratos de los clientes",
                    }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, {
                        disabled: !0,
                        checked: !0,
                      }),
                    }),
                    Object(j.jsx)(q.a, {
                      children: "Validaci\xf3n de los formularios",
                    }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, {
                      children: "Notificaciones con Socket.IO",
                    }),
                  ],
                }),
                Object(j.jsxs)(D.a, {
                  children: [
                    Object(j.jsx)(I.a, {
                      children: Object(j.jsx)(Yt.a, { disabled: !0 }),
                    }),
                    Object(j.jsx)(q.a, {
                      children:
                        "Establecer tema front-end / A\xf1adir tema oscuro",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      const Zt = "https://gordianknot.xyz/api",
        $t = "project";
      var ea,
        ta = async (e, t) => {
          try {
            const a = await Y.a.post("".concat(Zt, "/").concat($t), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
            return console.log(a), a.data;
          } catch (a) {
            console.log("has an error"), console.log(a);
          }
        },
        aa = async (e) => {
          try {
            return (
              await Y.a.get("".concat(Zt, "/").concat($t, "/user"), {
                headers: { Authorization: "Bearer: ".concat(e) },
              })
            ).data;
          } catch (t) {
            console.log(t);
          }
        },
        na = async (e, t) => {
          try {
            return await Y.a.put("".concat(Zt, "/user"), t, {
              headers: { Authorization: "Bearer: ".concat(e) },
            });
          } catch (a) {
            console.log(a);
          }
        };
      const ra = Object(S.a)(de.a)(
        ea ||
          (ea = Object(u.a)([
            "\n  & input,\n  textarea,\n  select,\n  option,\n  root {\n    padding: 20px;\n    background-color: #f3f3f3;\n  }\n",
          ]))
      );
      var ca,
        oa = (e) => {
          let { token: t, user: a } = e;
          const [r, c] = Object(n.useState)(""),
            [o, s] = Object(n.useState)(!1),
            [l, i] = Object(n.useState)(),
            { updateUser: d, updateWorkingProjectContext: b } = Object(
              n.useContext
            )(k),
            [u, p] = Object(n.useState)("default");
          Object(n.useEffect)(() => {
            !(async function () {
              const e = await aa(t);
              d(e);
            })();
          }, [o]);
          const x = () => {
            "Cual proyecto quieres trabajar?" !== l &&
              (b(l),
              (async (e) => {
                const n = a.projects.find((t) => t.projectName === e);
                await na(t, n);
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
                      onChange: (e) => c(e.target.value),
                      value: r,
                    }),
                  }),
                  Object(j.jsx)(C.a, {
                    variant: "contained",
                    color: "primary",
                    onClick: () =>
                      (async () => {
                        const e = {
                          projectName: r,
                          projectUsers: [{ userId: a._id, role: "admin" }],
                        };
                        await ta(t, e), c(""), s(!o);
                      })(),
                    children: "Enviar",
                  }),
                ],
              }),
              Object(j.jsxs)("div", {
                children: [
                  Object(j.jsx)("h2", { children: "Elegir proyecto" }),
                  Object(j.jsxs)(Ue.a, {
                    defaultValue: u,
                    onChange: (e) => {
                      var t;
                      "Cual proyecto quieres trabajar?" !==
                        (t = e.target.value) && i(t);
                    },
                    name: "workingProject",
                    variant: "outlined",
                    children: [
                      Object(j.jsx)(Je.a, {
                        value: u,
                        disabled: !0,
                        children: "Cual proyecto quieres trabajar?",
                      }),
                      a && a.projects
                        ? a.projects.map((e) =>
                            Object(j.jsx)(
                              Je.a,
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
                    onClick: () => x(),
                    children: "Elegir",
                  }),
                ],
              }),
            ],
          });
        };
      const sa = Object(w.a)(() => ({
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
        la = S.a.div(ca || (ca = Object(u.a)(["\n  height: 55px;\n"])));
      function ia(e) {
        let { token: t } = e;
        const a = sa(),
          [r, c] = Object(n.useState)(!1),
          { user: o, logout: l, selectedProject: i } = Object(n.useContext)(k);
        return Object(j.jsxs)("div", {
          className: a.root,
          children: [
            Object(j.jsx)(la, {
              children: Object(j.jsx)(m.a, {
                className: a.appBar,
                children: Object(j.jsxs)(g.a, {
                  children: [
                    Object(j.jsx)(y.a, {
                      color: "inherit",
                      onClick: () => c(!r),
                      className: a.icon,
                      children: r
                        ? Object(j.jsx)(O.a, {})
                        : Object(j.jsx)(x.a, {}),
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
                    paper: Object(N.a)(a.drawer, {
                      [a.closed]: !r,
                      [a.opened]: r,
                    }),
                  },
                  children: Object(j.jsx)(U, {}),
                }),
                Object(j.jsx)("main", {
                  className: a.main,
                  children: Object(j.jsxs)(s.d, {
                    children: [
                      Object(j.jsx)(s.b, {
                        path: "/app/customer",
                        children: Object(j.jsx)(Kt, {
                          token: t,
                          user: o,
                          selectedProject: i,
                        }),
                      }),
                      Object(j.jsx)(s.b, {
                        path: "/app/pdf",
                        children: Object(j.jsx)(dt, {
                          token: t,
                          user: o,
                          selectedProject: i,
                        }),
                      }),
                      Object(j.jsx)(s.b, {
                        path: "/app/ajustes",
                        children: Object(j.jsx)(oa, {
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
                        children: Object(j.jsx)(Xt, {}),
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
      const da = "https://gordianknot.xyz/api",
        ja = "auth";
      var ba,
        ua,
        pa,
        xa,
        ha,
        Oa,
        ma,
        ga,
        va = async (e, t) => {
          try {
            return (
              await Y.a.post("".concat(da, "/").concat(ja, "/login"), {
                username: e,
                password: t,
              })
            ).data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        },
        fa = async (e, t) => {
          try {
            return (
              await Y.a.post("".concat(da, "/").concat(ja, "/register"), {
                username: e,
                password: t,
              })
            ).data;
          } catch (a) {
            throw new Error(a.response.data.msg);
          }
        };
      const ya = S.a.div(
          ba ||
            (ba = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n",
            ]))
        ),
        Ca = S.a.div(
          ua ||
            (ua = Object(u.a)([
              "\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  flex-grow: 1;\n",
            ]))
        ),
        Na = S.a.div(
          pa ||
            (pa = Object(u.a)([
              '\n  margin: 40px auto;\n  font-family: "Segoe UI", sans-serif;\n  padding: 25px 28px;\n  border-radius: 4px;\n  border: 1px solid #302d2d;\n  display: flex;\n  flex-flow: column wrap;\n',
            ]))
        ),
        wa = S.a.p(
          xa ||
            (xa = Object(u.a)([
              "\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n  font-weight: 400;\n",
            ]))
        ),
        Sa = S.a.p(
          ha ||
            (ha = Object(u.a)([
              "\n  text-align: center;\n  > a {\n    color: #fc86aa;\n  }\n",
            ]))
        ),
        ka = Object(S.a)(de.a)(
          Oa ||
            (Oa = Object(u.a)([
              "\n  & input,\n  textarea,\n  select,\n  option {\n    padding: 20px;\n  }\n",
            ]))
        ),
        Ea = S.a.div(
          ma ||
            (ma = Object(u.a)([
              "\n  flex-grow: 0;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n  padding: 5px;\n  width: 90%;\n",
            ]))
        ),
        Pa = S.a.div(
          ga ||
            (ga = Object(u.a)([
              "\n  display: block;\n  margin-bottom: 20px;\n",
            ]))
        );
      var Ta = (e) => {
        let { submitUser: t } = e;
        const [a, r] = Object(n.useState)(!0),
          [c, o] = Object(n.useState)(null),
          [l, i] = Object(n.useState)(""),
          [b, u] = Object(n.useState)(""),
          { login: p } = Object(n.useContext)(k),
          x = localStorage.getItem(d.ACCESS_TOKEN);
        return x
          ? Object(j.jsx)(s.a, { to: "/app" })
          : Object(j.jsxs)(ya, {
              children: [
                Object(j.jsx)("header", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsx)(wa, { children: "Gordian Knot" }),
                }),
                Object(j.jsxs)(Ca, {
                  children: [
                    Object(j.jsxs)(Na, {
                      children: [
                        Object(j.jsx)(wa, {
                          children: a ? "Login" : "Registro",
                        }),
                        Object(j.jsxs)("form", {
                          children: [
                            Object(j.jsx)(Pa, {
                              children: Object(j.jsx)(ka, {
                                placeholder: "Nombre de usuario",
                                variant: "outlined",
                                type: "text",
                                id: "username",
                                margin: "dense",
                                onChange: (e) => i(e.target.value),
                                value: l,
                              }),
                            }),
                            Object(j.jsx)(Pa, {
                              children: Object(j.jsx)(ka, {
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
                                    const e = await va(t, a);
                                    p(e);
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
                                    const n = await fa(t, a);
                                    p(n);
                                  } catch (n) {
                                    o(n.message),
                                      setTimeout(() => {
                                        o(null);
                                      }, 4e3);
                                  }
                                })(e, l, b),
                          children: "Enviar",
                        }),
                        Object(j.jsxs)(Sa, {
                          children: [
                            "Quieres\xa0",
                            Object(j.jsx)(C.a, {
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
                      ? Object(j.jsx)(Ea, {
                          children: Object(j.jsx)("p", { children: c }),
                        })
                      : Object(j.jsx)(Ea, { children: "\xa0" }),
                  ],
                }),
                Object(j.jsx)("footer", {
                  style: { backgroundColor: "#00022E", color: "#FC86AA" },
                  children: Object(j.jsxs)(Sa, {
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
          invoiceTotal: r,
          orderNumber: c,
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
                    Object(j.jsxs)("p", { children: ["\u20ac ", r] }),
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
      var qa = (e) => {
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
      a(181);
      var _a = async (e, t) => {
        try {
          return (
            await Y.a.get(
              "".concat("https://gordianknot.xyz/api", "/pdf/").concat(t),
              { headers: { Authorization: "Bearer: ".concat(e) } }
            )
          ).data;
        } catch (a) {
          console.log(a);
        }
      };
      var Fa = (e) => {
        let { match: t } = e;
        const [a, r] = Object(n.useState)(null);
        Object(n.useEffect)(() => {
          const e = localStorage.getItem(d.ACCESS_TOKEN);
          console.log(e), e && c(e, t.params.id);
        }, [t.params]);
        const c = async (e, t) => {
          try {
            const a = await _a(e, t);
            r(a);
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
                          Object(j.jsx)(qa, { invoice: a }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          }),
        });
      };
      var Ba = () => {
        const [e, t] = Object(n.useState)();
        return Object(j.jsx)("div", {
          children: Object(j.jsx)(E, {
            children: Object(j.jsx)(s.c, {
              history: i,
              children: Object(j.jsxs)(s.d, {
                children: [
                  Object(j.jsx)(b, { component: ia, path: "/app", user: e }),
                  Object(j.jsx)(b, {
                    component: Fa,
                    path: "/topdf/:id",
                    user: e,
                  }),
                  Object(j.jsx)(s.b, {
                    path: "/",
                    children: Object(j.jsx)(Ta, {}),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      a(182);
      const Ma = document.getElementById("root");
      o.a.render(
        Object(j.jsx)(n.StrictMode, { children: Object(j.jsx)(Ba, {}) }),
        Ma
      );
    },
  },
  [[183, 1, 2]],
]);
//# sourceMappingURL=main.1fc315aa.chunk.js.map
